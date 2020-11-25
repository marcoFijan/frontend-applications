<script>
    // Import
    import { beforeUpdate, onDestroy, onMount } from 'svelte'
    import * as d3 from "d3";
    // import RDWStore from '/src/stores/RDWStore.js'
    import FilterStore from '/src/stores/FilterStore.js'

    // Export
    export let dataRDW;

    let unsubFilter;
    // let dataRDW = [];
    let dataRDWFilter = [];
    let stackedBars = [];
    let hasNoBigBar;
    let isPercentage;
    let hasKnown;
    
    const width = 800;
    const height = 400;
    const margin = { left: 70, right: 20, bottom: 100, top: 50 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    let mainTitle = "Aantal beschikbare parkeerplaatsen per provincie";
    let xAxisTitle = "Provincies";
    let yAxisTitle = "Aantal parkeerplaatsen";
    //-- Y & X Values --

    let barKeys = ['totalDisabledCapacity', 'totalNotDisabledCapacity'];
    let stackGenerator = d3.stack().keys(barKeys)
    const valueX = d => d.province 
    console.log('fetcheddata', dataRDW);
    dataRDWFilter = dataRDW;

    unsubFilter = FilterStore.subscribe(storeData => {
        hasNoBigBar = storeData.hasNoBigBar;
        isPercentage = storeData.isPercentage;
        hasKnown = storeData.hasKnown;
    });
    


    onDestroy(() =>{
        console.log('component destroyed'); 
        unsubFilter();
    }); 

    stackedBars = stackGenerator(dataRDWFilter);
    console.log('dataRDW', stackedBars)


    $: colorScale = d3.scaleOrdinal()
        .domain(['totalDisabledCapacity', 'totalNotDisabledCapacity'])
        .range(['#BA3E8D', '#1A6E93'])

    $: scaleY = d3.scaleLinear()
        .domain([d3.max(stackedBars, layer => d3.max(layer, subLayer => subLayer[1])), 0])
        .range([0, innerHeight])
        .nice()

    $: scaleX = d3.scaleBand()
        .domain(dataRDWFilter.map(valueX)) // Select all the provinces for the domain
        .range([0, innerWidth])
        .padding(0.2)

    $: yTicks = function () {
        const [highestPoint, startPoint] = scaleY.domain();
        let ticks = [];
        console.log('start', startPoint);
        const steps = (highestPoint - startPoint) / 10;
        console.log(steps);
        for (let i = startPoint; i <= highestPoint; i=i+steps) {
            ticks.push(i);
        }
        return ticks;
  };

    if(isPercentage){
        console.log('check')
        showPercentage();
    }

    if(hasKnown){
        console.log('check')
        removeUnknown();
    }
    
    if(hasNoBigBar){
        console.log('check')
        removeBigBar();
    }




  function showPercentage(){
    if(isPercentage){
        barKeys = ['percentageAvailible'];
        stackGenerator = d3.stack().keys(barKeys)
        stackedBars = stackGenerator(dataRDWFilter);
        yAxisTitle = "Invalide parkeerplaatsen (%)";
    }
    else{
        barKeys = ['totalDisabledCapacity', 'totalNotDisabledCapacity'];
        stackGenerator = d3.stack().keys(barKeys)
        stackedBars = stackGenerator(dataRDWFilter);
        yAxisTitle = "Aantal parkeerplaatsen";
    }
    console.log(dataRDWFilter)
    updateFilter();
  }

  function removeUnknown(){
      if(hasKnown){
        dataRDWFilter = dataRDWFilter.filter(province => province.province !== 'onbekend') // return array without that highestCapacity
      }
      else{
        dataRDWFilter = dataRDW;  
        if(hasNoBigBar){
            removeBigBar();
        }
      }
      console.log(dataRDWFilter)
      stackedBars = stackGenerator(dataRDWFilter);
      updateFilter();
  }
  
  function removeBigBar(){
    if (hasNoBigBar){
        const noUnknownProvinces = dataRDW.filter(garage => garage.province !== 'onbekend')  // Don't filter the unknown province data
        const highestCapacity = d3.max(noUnknownProvinces.map(province => province.totalCapacity)) // calculate province with highestCapacity
        dataRDWFilter = dataRDWFilter.filter(province => province.totalCapacity !== highestCapacity) // return array without that highestCapacity
    }
    else {
        dataRDWFilter = dataRDW;
        if(hasKnown){
            removeUnknown();
        }
    }
    console.log(dataRDWFilter)
    stackedBars = stackGenerator(dataRDWFilter);
    updateFilter();
  }

  function updateFilter(){
    FilterStore.update(() => { 
       return {
        hasNoBigBar: hasNoBigBar,
        isPercentage: isPercentage,
        hasKnown: hasKnown
        };       
    }); 
  }



</script>

<style>
svg{
    color: #2A292F;
    font-weight: normal;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    width: 100%;
    height: 400px;
}

rect{
    opacity: .8;
  /* transition: ease-in .2s; */
}

/* rect:hover{
    opacity: 1;
} */

.tick{
    font-size: 0.725em;
    font-weight: 200;
}

text{
    fill: #2A292F;
    text-anchor: start;
}

.xAxis>.tick>text{
    font-size: .85em;
    text-anchor: center;
    fill: #2A292F; 
}

.tick line{
    stroke: #cfcfcf;
}

svg > text{
    font-size: 1.5em;
}

.rotate{
    transform: rotate(90deg);
    text-anchor: middle;
}

.subtitle{
    font-size: 1.2em;
    text-anchor: middle;
}

.xAxis text{
    text-anchor: start;
}

.xAxis text.xAxisName, .yAxisName{
    font-size: 2em;
    text-anchor: middle;
    fill: #2A292F;
}

.layers .layer:nth-child(2){
    fill: #dd9536;
}

.layers .layer:nth-child(3){
    fill: #0077cc;
}

.label{
    text-anchor: middle;
    font-size: .9em;
    text-shadow: .5px .5px white;
    opacity: 0;
}

rect:hover + .label, .label:hover, rect:hover{
    opacity: 1;
    cursor: default;
}

</style>

<h1>a chart</h1>
<svg>
    <g class="yAxis">
        <!-- <text y={margin.top/2} x="{(innerWidth/2)+margin.left}">Een hele mooie chart</text> -->
        <text class='rotate subtitle' y="-5" x={(innerHeight/2)+margin.top}>{yAxisTitle}</text>
        {#each yTicks() as tick}
          <g class="tick tick-{tick}" transform="translate(0, {scaleY(tick)})">
            <line x1="{margin.left}" x2="{innerWidth+margin.left}" y1={margin.top} y2={margin.top} />
            <text y={4+margin.top} x="25">{tick}</text>
          </g>
        {/each}
    </g>
    <g class="xAxis">
        <text class='subtitle' y="{height}" x="{(innerWidth/2)+margin.left}">{xAxisTitle}</text>
        {#each stackedBars as layer }
            <g class="tick" transform="translate({scaleX(layer)},{innerHeight})">
                {#each layer as bar}
                    <text x={scaleX(bar.data.province)+margin.left} y={innerHeight+margin.top+12}>{bar.data.province}</text>
                {/each}
            </g>
        {/each}
    </g>
    <g class="layers">
        <text y={margin.top/2} x="{(innerWidth/2)+margin.left}">{mainTitle}</text>
        {#each stackedBars as layer}
            <g class="layer">
                {#each layer as bar}
                <rect
                    width={scaleX.bandwidth()}
                    height={scaleY(bar[0]) - scaleY(bar[1])}
                    x={scaleX(bar.data.province)+margin.left}
                    y={scaleY(bar[1])+margin.top}
                /> 
                <text class="label" x={scaleX(bar.data.province)+margin.left + (scaleX.bandwidth() / 2)} y={scaleY(bar[1])+margin.top}>{Math.round(bar[1])}</text>
                {/each}
            </g>
        {/each}
    </g>
</svg>
<ul>
    <li>
      <input type="checkbox" id="showPercentage" name="showPercentage" disabled={hasNoBigBar} bind:checked={isPercentage} on:change={showPercentage}>
      <label for="showPercentage">Percentages</label>
    </li>
    <li>
      <input type="checkbox" id="filterUnknown" name="filterUnknown" bind:checked={hasKnown} on:change={removeUnknown}>
      <label for="filterUnknown">Verwijder data van onbekende provincie</label>
    </li>
    <li>
        <input type="checkbox" id="filterBigBar" name="filterBigBar" bind:checked={hasNoBigBar} disabled={isPercentage} on:change={removeBigBar}>
        <label for="filterBigBar">Verwijder provincie met de meeste parkeerplaatsen</label>
    </li>
  </ul>