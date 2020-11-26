<script>
    // IMPORT LIFECYCLE FUNCTIONS
    import { onDestroy, onMount } from 'svelte'

    // IMPORT MOLECULES
    import OpeningArticle from '/src/components/molecules/OpeningArticle.svelte';
    import OpeningBanner from '/src/components/molecules/OpeningBanner.svelte';
    import Article from '/src/components/molecules/Article.svelte';
    import ArticleSection from '/src/components/molecules/ArticleSection.svelte';
    import LocationBubble from '/src/components/molecules/LocationBubble.svelte';
    import Checkbox from '/src/components/atoms/CustomCheckbox.svelte';
    import InputList from '/src/components/atoms/CustomInputList.svelte';  
    import Chart from '/src/components/molecules/Chart.svelte';
    import UserInput from '/src/components/molecules/UserInput.svelte';

    // IMPORT STORES
    import CBSStore from '/src/stores/CBSStore.js'
    import CBSProvincesStore from '/src/stores/CBSProvincesStore.js'

    // EXPORTS
    export let dataCBS;
    export let dataRDW;

    // VARIABLES
    let unsubProvince;
    let unsubCBS;

    // REACTIVE VARIABLES
    $: provinces = []; 
    $: userInputLocations = [];
    $: chartData = [];

    // ONMOUNT: GIVE REACTIVE USERINPUT VARIABLE VALUES
    onMount(() => {
        subscribeStores();
        if(!chartData[0]){
            chartData = dataRDW
        } 
        userInputLocations = userInputLocations;
    }) 

    // ONDESTROY: UNSUBSCRIBE STORES
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

    // SUBSCRIBE TO THE STORES
    function subscribeStores() {
        unsubCBS = CBSStore.subscribe(storeData => {
            userInputLocations = storeData;  
        });
        unsubProvince = CBSProvincesStore.subscribe(storeData => {
            provinces = storeData; 
        }); 
    }
 
    // FUNCTION: ADDLOCATION ON USERINPUT
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
        // UPDATE THE STORES
        CBSProvincesStore.update(() => { 
            return provinces;   
        }); 
        CBSStore.update(() => {
            return userInputLocations;
        })       
    }

    // FUNCTION: REMOVE LOCATION ON USERINPUT
    function removeLocation(locationName){
        userInputLocations = userInputLocations.filter(location => (location.location !== locationName))
    }
</script>

<!-- STYLING -->
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
        grid-gap: 2em;
    }

    li{
        padding: .8em 0;
    }
</style>

<main>
    <!-- Openingsarticle with a banner, big title and description -->
    <div id='home'></div> <!-- NAVIGATOIN ID-->
    <OpeningBanner/>
    <OpeningArticle 
        h2Content='Het probleem' 
        pContent='In Nederland heeft, volgens de cijfers van het CBS, gemiddeld 15% van de inwoners van een stad een lichamelijke beperking. Dit is een relatief hoog percentage. Niet alle mensen met een lichamelijke beperking zullen zelf auto kunnen rijden. Maar deze mensen kunnen natuurlijk wel vervoerd of gebracht worden met de auto. Wanneer bijvoorbeeld een parkeergarage in een centrum niet toegankelijk is voor lichamelijk gehandicapten, kan dat betekenen dat zij simpelweg niet kunnen winkelen of shoppen met de auto. Hetzelfde geldt voor de boodschappen doen in een supermarkt. Aangezien ik in de dataset van RWD best veel data zag staan waar parkeerplaatsen niet waren voor lichamelijk gehandicapten, leek het mij interessant om te onderzoeken welke provincie nu de meeste en minste parkeerplekken heeft voor lichamelijk gehandicapten. Ik combineer deze data met een dataset van het CBS die aantoont hoeveel procent van de inwoners een lichamelijke beperking heeft.'
    />

    <!-- Article where the user can see if his province has enough availible parkingspots for phisical limitated people -->
    <div id='uwprov'></div> <!-- NAVIGATOIN ID-->
    <Article 
        h2Content='Hoe goed toegankelijk zijn de parkeerplekken in uw provincie?'
        pContent=''>
        {#await dataRDW}
            Fetching data. 
        {:then fetchedData}
            <UserInput dataRDW={fetchedData} dataCBS={dataCBS}/>
        {/await}
    </Article>

    <!-- Article with 'bubbles' with the percentage of phisical limited people per province -->
    <div id='amount'></div> <!-- NAVIGATOIN ID-->
    <Article  
        h2Content='Hoeveel inwoners zijn er invalide?'
        pContent='Volgens de cijfers van het CBS heeft gemiddeld 15% van de Nederlandse bevolking 1 of meerdere fysieke handicap. Dit zou betekenen dat minimaal 15% van de parkeergarages beschikbaar zouden moeten zijn voor mensen met een lichamelijke handicap. Maar is dat ook zo? Daarnaast is het gemiddelde 15 procent, maar er zijn ook provincies waar er meer mensen wonen met een lichamelijke beperking. Hieronder kunt u verschillende provincies met elkaar vergelijken:'>
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
    
    <!-- Article with graph about the availible parkingspots per province -->
    <div id='chart'></div> <!-- NAVIGATOIN ID-->
    <Article 
        h2Content='Hoeveel invalide parkeerplekken zijn beschikbaar?'
        pContent='Om een overzichtelijk beeld te geven over hoe elke provincie scoort, heb ik hieronder nog een barchart weergegeven. In deze barchart ziet u de verhouding van parkeerplaatsen voor lichamelijk gehandicapten. Deze zijn ook om te zetten naar percentages.'>
        <!-- Wait for the data here, other articles can be loaded in the meantime -->
        {#await dataRDW}
            Fetching data. 
        {:then fetchedData}
            <Chart dataRDW={fetchedData}/>
        {/await}
    </Article>
    <!-- Article with information on how I used the fetched data -->
    <div id='how'></div> <!-- NAVIGATOIN ID-->
    <Article 
        h2Content='Hoe heb ik de data gebruikt?'
        pContent='De data die ik heb verzameld was lang niet altijd compleet. Soms ontbraken er essentiële gegevens waardoor ik er oorspronkelijk niks aan had. Ik heb daarom veel data moeten opschonen. Hierdoor kan de data een klein beetje een vertekend beeld geven. Hieronder kunt u lezen hoe ik de data heb opgehaald en wat ik precies heb aangepast om de data te gebruiken.'>
        <ArticleSection
            h3Content='Provinces'
            pContent='Het kwam wel eens voor dat er undefined provinces tussenzaten. Dit betekent simpelweg dat er geen locatie data beschikbaar is voor die parkeergarage. Ik heb dit opgelost door deze data alsnog wel mee te nemen naar mijn visualisatie door het op te slaan in een provincie genaamd onbekend. Hierdoor is alsnog zichtbaar wat de verhouding en percentage is van de toegankelijke parkeergarages'>
        </ArticleSection>
        <ArticleSection 
            h3Content='Capacity'
            pContent='Het kwam ook voor dat capacity niet was ingevuld. Capacity stond voor het aantal parkeerplekken van die parkeergarage. Dit heb ik opgelost door, van de 5000 parkeergarages die wel capacity hadden, het gemiddelde uit te rekenen. Dat gemiddelde heb ik doorgegeven aan die parkeergarages die geen capacity hadden. Hierdoor kan het zijn dat sommige parkeergarages meer of minder parkeerplekken hebben in mijn visualisatie dan dat ze eigenlijk hebben. Maar dit geeft alsnog een beter beeld dan wanneer ik capacity leeg laat, want dan worden er flink wat parkeergarages niet meegenomen bij het berekenen van de percentages.'>
        </ArticleSection>
        <ArticleSection 
            h3Content='DisabledAccess'
            pContent='Een laatste kolom die ik heb gebruikt van de RDW dataset was disabledAccess. Deze kolom gaf een boolean (waar of niet waar) mee of deze parkeergarage toegankelijk was voor mensen met een lichamelijk handicap. Deze kolom was echter altijd ingevuld. Alleen zat hier heel vaak de waarde false (niet waar) tussen. Het zou mij niet verbazen als false de standaard waarde is van de RDW dataset. Hierdoor staan alle parkeergarages standaard op false, totdat iemand dit handmatig aanpast naar true (waar). Dit is maar speculatie en heb daarom de waarde van de dataset ook niet aangepast. Voor de visualisaties heb ik gewoon de waarde van de kolom meegenomen voor mijn berekeningen.'>
        </ArticleSection>
    </Article>
</main>
