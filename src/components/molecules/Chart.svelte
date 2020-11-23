<script>
    // Import
    import { onDestroy, onMount } from 'svelte'
    import * as d3 from "d3";
    import RDWStore from '/src/stores/RDWStore.js'
    import { setupRDWData } from '/src/script/GetRDWDataset.js'

    // Data variables
    let dataRDW = [];
    $: chartData = [];
    let unsubRDW;

    // D3 Variables
    //-- General --
    const svg = d3.select('svg')
    let data
    let filteredData
    let g
    //-- Position & Size --
    const width = 700
    const height = 400
    const margin = { left: 70, right: 20, bottom: 100, top: 50 }
    const innerWidth = width - margin.left - margin.right
    const innerHeight = height - margin.top - margin.bottom
    //-- Y & X Values --
    const stackGenerator = d3.stack().keys(['totalDisabledCapacity', 'totalNotDisabledCapacity'])
    const valueX = d => d.province // d.data.province
    let stackedBars
    //-- Scales --
    let colorScale
    let scaleY
    let scaleX

    onMount(async function () {
        console.log('Chart component mounted')
        // fetch data from RDW
        dataRDW = await setupRDWData();
        console.log('rdwtje', dataRDW);
        unsubRDW = RDWStore.subscribe(storeData => {
            chartData = storeData;  
        });
        if(!chartData[0]){
            chartData = dataRDW
        } 
    }) 
    
    onDestroy(() =>{
        console.log('Chart component destroyed'); 
        unsubRDW();
    }); 


</script>

<style>
  
</style>

<h1>a chart</h1>
<svg></svg>