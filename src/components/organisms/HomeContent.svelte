<script>
    import { onDestroy, onMount, tick } from 'svelte'
    // Import Molecules
    import OpeningArticle from '/src/components/molecules/OpeningArticle.svelte';
    import OpeningBanner from '/src/components/molecules/OpeningBanner.svelte';
    import Article from '/src/components/molecules/Article.svelte';
    import LocationBubble from '/src/components/molecules/LocationBubble.svelte';
    import Button from '/src/components/atoms/CustomButton.svelte';
    import Checkbox from '/src/components/atoms/CustomCheckbox.svelte';
    import InputList from '/src/components/atoms/CustomInputList.svelte';  
    import Chart from '/src/components/molecules/Chart.svelte';

    // Import Stores
    import CBSStore from '/src/stores/CBSStore.js'
    import CBSProvincesStore from '/src/stores/CBSProvincesStore.js'
    // import RDWStore from '/src/stores/RDWStore.js'

    // Import Helpers
    import { setupCBSData } from '/src/script/GetCBSDataset.js'
    import { setupRDWData } from '/src/script/GetRDWDataset.js'
    import * as d3 from 'd3';

    $: provinces = []; 
    let dataCBS = [];
    let dataRDW = setupRDWData();
    $: userInputLocations = [];
    $: chartData = [];
    let unsubProvince;
    let unsubCBS;

 
    onMount(async function () {
        console.log('component mounted')
        // fetch data from CBS
        dataCBS = await setupCBSData(); 
        // fetch data from RDW
        dataRDW = await setupRDWData();
        console.log('rdw', dataRDW);
        subscribeStores();
        // if(!userInputLocations[0]){
        //     userInputLocations.push(dataCBS[12])   
        // }
        if(!chartData[0]){
            chartData = dataRDW
        } 
        userInputLocations = userInputLocations;
        console.log(userInputLocations)
        return userInputLocations;
    }) 

    onDestroy(() =>{
        console.log('component destroyed'); 
        CBSProvincesStore.update(() => { 
            return provinces;   
        });
        CBSStore.update(() => {
            return userInputLocations;
        })
        unsubProvince(); 
        unsubCBS(); 
    });  

    function subscribeStores() {
        unsubCBS = CBSStore.subscribe(storeData => {
            userInputLocations = storeData;  
        });
        unsubProvince = CBSProvincesStore.subscribe(storeData => {
            provinces = storeData; 
        }); 
    }
 
    function addLocation(locationName) {
        console.log('running addlocation')
        for (let i = 0; i < dataCBS.length; i++) {
            if (dataCBS[i].location === locationName) {
                let isDouble = (userInputLocations.filter(location => location.location === locationName).length) > 0;
                provinces.forEach(province => { //change the province array for the store
                    if(province.name === locationName){
                        province.clicked = !province.clicked
                    }
                 }) 
                if (isDouble) {       
                    removeLocation(locationName)
                }
                else{
                    userInputLocations.push(dataCBS[i]);
                    userInputLocations = userInputLocations;
                    console.log(userInputLocations)
                }
            }
        }
        CBSProvincesStore.update(() => { 
            return provinces;   
        }); 
        CBSStore.update(() => {
            return userInputLocations;
        })       
    }

    function removeLocation(locationName){
        userInputLocations = userInputLocations.filter(location => (location.location !== locationName))
    }


</script>

<style>
    main{
        background: #f7f7f7;
        min-height: 100vh;
        z-index: 1;
    }

    section{
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(12em, 1fr));
        grid-gap: 1em;
    }

    li{
        padding: .8em 0;
    }
</style>
<!-- <Sidebar/> -->

<main>
    <OpeningBanner/>
    <OpeningArticle 
      h2Content='Het probleem' 
      pContent='In Nederland zijn er, volgens de cijfers van het CBS, gemiddeld 12% inwoners van een stad met een lichamelijke beperking. Dit vind ik een aardig hoog percentage. Niet alle mensen met een lichamelijke beperking zullen zelf auto kunnen rijden. Maar deze mensen kunnen natuurlijk wel vervoerd of gebracht worden met de auto. Wanneer een parkeergarage in een centrum dan niet toegankelijk is voor lichamelijk gehandicapten, kan dat betekenen dat zij niet even kunnen winkelen of shoppen. Zelfde geld voor simpelweg de boodschappen doen in een supermarkt. Aangezien ik in de dataset van RWD best veel nullen zag staan (geen toegang voor lichamelijk gehandicapten), leek het mij interessant om te onderzoeken waar nu precies die parkeerplaatsen staan.'
    />
    <Article  
    h2Content='Hoeveel inwoners zijn er invalide?'
    pContent='Volgens de cijfers van het CBS heeft gemiddeld 15% van de Nederlandse bevolking 1 of meerdere fysieke handicap. Dit zou betekenen dat minimaal 15% van de parkeergarages beschikbaar zouden moeten zijn voor mensen met een lichamelijke handicap. Maar is dat ook zo? Daarnaast is het gemiddelde 15 procent, maar er zijn ook provincies waar er meer mensen wonen met een lichamelijke beperking. Vind uw eigen provincie:'>
        <InputList>
            {#each provinces as item}  
                <li>
                    <Checkbox selected={item.clicked} checkboxEvent={() => addLocation(item.name)} labelText={item.name}></Checkbox>
                </li>
            {/each}
        </InputList>
        <section>
            {#each userInputLocations as location}
                    <LocationBubble 
                        h3Text={location.location}
                        pText={location.percentage+'%'}
                    />
            {/each}
        </section>
    </Article>
    <Article 
    h2Content='Hoeveel invalide parkeerplekken zijn beschikbaar?'
    pContent='bar chart met invalide inwoners en percentages vermelden'>
    {#await dataRDW}
        Fetching data.
    {:then fetchedData}
        <Chart dataRDW={fetchedData}/>
    {/await}
    </Article>
    <Article 
    h2Content='Hoeveel inwoners zijn er invalide?'
    pContent='bar chart met invalide inwoners en percentages vermelden'/>

</main>
