<script>
    import { onMount } from 'svelte'
    import OpeningArticle from '/src/components/molecules/OpeningArticle.svelte';
    import OpeningBanner from '/src/components/molecules/OpeningBanner.svelte';
    import Article from '/src/components/molecules/Article.svelte';
    import LocationBubble from '/src/components/molecules/LocationBubble.svelte';
    import CBSStore from '/src/stores/CBSStore.js'
    import { setupData } from '/src/script/DisabledAmount.js'

    const cbsUrl = 'https://raw.githubusercontent.com/marcoFijan/hostRDWData/main/provincesCBS.json';
    let data = [];
    $: userInputLocations = [];
    let checkNederland = false;

    // CBSStore.subscribe(data => {
    //     disabledAmount = data;
    // })

    onMount(async function () {
        data = await setupData();
        if(!userInputLocations[0]){
            userInputLocations.push(data[12])
        }
        userInputLocations = userInputLocations;
        console.log(userInputLocations)
        return userInputLocations;
    })

    function addLocation(locationName) {
        console.log('running addlocation')
        for (let i = 0; i < data.length; i++) {
            if (data[i].location === locationName) {
                let isDouble = (userInputLocations.filter(location => location.location === locationName).length) > 0;
                if (isDouble) {
                    removeLocation(locationName)
                }
                else{
                    userInputLocations.push(data[i]);
                    userInputLocations = userInputLocations;
                    console.log(userInputLocations)
                }
            }
        }
    }

    function removeLocation(locationName){
        userInputLocations = userInputLocations.filter(location => (location.location !== locationName))
    }

    // let getLocationPromise = getLocation();


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
        grid-template-columns: repeat(auto-fill, minmax(11em, 1fr));
        grid-gap: 2.4em;
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
    <section>
        {#each userInputLocations as location}
                <LocationBubble 
                    h3Text={location.location}
                    pText={location.percentage+'%'}
                />
        {/each}
        <button on:click={() => addLocation('Groningen')}>
            Groningen
        </button>

        <!-- {#await getLocationPromise}
            <p>...waiting</p>
        {:then locations}
            <button on:click={() => addLocation('Groningen')}>
                Groningen
            </button>
            {#each locations as location}
                <LocationBubble 
                    h3Text={location.location}
                    pText={location.percentage+'%'}
                />
            {/each}
        {:catch error}
            <p style="color: red">{error.message}</p>
        {/await} -->
    </section>
    </Article>
    <Article 
    h2Content='Hoeveel invalide parkeerplekken zijn beschikbaar?'
    pContent='bar chart met invalide inwoners en percentages vermelden'/>
    <Article 
    h2Content='Hoeveel inwoners zijn er invalide?'
    pContent='bar chart met invalide inwoners en percentages vermelden'/>

</main>
