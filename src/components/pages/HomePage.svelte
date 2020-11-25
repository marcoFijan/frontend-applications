<script>
    import { onMount } from 'svelte'
    import Home from '/src/components/templates/Home.svelte';
    // Import Helpers
    import { setupCBSData } from '/src/script/GetCBSDataset.js'
    import { setupRDWData } from '/src/script/GetRDWDataset.js'

    // Variables
    let dataCBS = [];
    let dataRDW = setupRDWData();

    onMount(async function () {
        // fetch data from CBS
        dataCBS = await setupCBSData(); 
        // fetch data from RDW
        dataRDW = await setupRDWData();
        console.log('rdw', dataRDW);
    }) 
</script>
<Home dataRDW={dataRDW} dataCBS={dataCBS}/>
