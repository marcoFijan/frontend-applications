<script>
    // Import
    import { onDestroy, onMount } from 'svelte'
    import * as d3 from "d3";
    import RDWStore from '/src/stores/RDWStore.js'
    import { setupRDWData } from '/src/script/GetRDWDataset.js'

    // Export
    

    let unsubRDW;
    let dataRDW;
    let stackedBars = [];


    const svg = d3.select('svg')

    let filteredData
    let g

    const width = 700
    const height = 400
    const margin = { left: 70, right: 20, bottom: 100, top: 50 }
    const innerWidth = width - margin.left - margin.right
    const innerHeight = height - margin.top - margin.bottom
    //-- Y & X Values --




    const stackGenerator = d3.stack().keys(['totalDisabledCapacity', 'totalNotDisabledCapacity'])
    const valueX = d => d.province 
    unsubRDW = RDWStore.subscribe(storeData => {
            dataRDW = storeData;  
        });

    onDestroy(() =>{
        console.log('component destroyed'); 
        unsubRDW();
    }); 

    stackedBars = stackGenerator(dataRDW);
    console.log('dataRDW', stackedBars)



    // console.log('fetchdata', fetchedData);
    // $: stackedBars = stackGenerator(fetchedData);
    // $: chartData = fetchedData; 

    // stackedBars = stackGenerator(fetchedData);
    // console.log(stackedBars);

    $: colorScale = d3.scaleOrdinal()
        .domain(['totalDisabledCapacity', 'totalNotDisabledCapacity'])
        .range(['#BA3E8D', '#1A6E93'])

    $: scaleY = d3.scaleLinear()
        .domain([d3.max(stackedBars, layer => d3.max(layer, subLayer => subLayer[1])), 0])
        .range([0, innerHeight])
        .nice()

    $: scaleX = d3.scaleBand()
        .domain(dataRDW.map(valueX)) // Select all the provinces for the domain
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


</script>

<style>
  svg{
  width: 700px;
  height: 400px;
}

rect{
  opacity: .8;
  /* transition: ease-in .2s; */
}

rect:hover{
  opacity: 1;
}

.tick{
    font-family: Helvetica, Arial;
    font-size: 0.725em;
    font-weight: 200;
}

text{
  fill: #2A292F;
  text-anchor: start;
}

.tick line{
  stroke: #A5A5A6;
}

svg > text{
  font-size: 1.5em;
}

.title{
  font-size: 1.5em;
  text-anchor: middle;
  fill: #2A292F;
}

.xAxis text{
  text-anchor: start;
}

.xAxis text.xAxisName, .yAxisName{
  font-size: 2em;
  text-anchor: middle;
  fill: #2A292F;
}
</style>

<h1>a chart</h1>
<svg>
    <g class="yAxis">
        {#each yTicks() as tick}
          <g class="tick tick-{tick}" transform="translate(0, {scaleY(tick)})">
            <line x2="100%" />
            <text y="-4">{tick}</text>
          </g>
        {/each}
      </g>
    <g class="xAxis">
        {#each stackedBars as layer, i}
            <g class="layer">
                {#each layer as bar, i}
                <rect
                    width={scaleX.bandwidth()}
                    height={scaleY(bar[0]) - scaleY(bar[1])}
                    x={scaleX(bar.data.province)}
                    y={scaleY(bar[1])}
                /> 
                {/each}
            </g>
        {/each}
    </g>
</svg>