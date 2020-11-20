<script>
    import { onMount } from 'svelte'
    import OpeningArticle from '/src/components/molecules/OpeningArticle.svelte';
    import OpeningBanner from '/src/components/molecules/OpeningBanner.svelte';
    import Article from '/src/components/molecules/Article.svelte';
    import LocationBubble from '/src/components/molecules/LocationBubble.svelte';
    import CBSStore from '/src/stores/CBSStore.js'
    import { setupData } from '/src/script/DisabledAmount.js'

    const cbsUrl = 'https://raw.githubusercontent.com/marcoFijan/hostRDWData/main/provincesCBS.json';
    let disabledAmount = [];

    CBSStore.subscribe(data => {
        disabledAmount = data;
    })

    async function getLocation() {
        const data = await setupData();
        for (let i = 0; i < data.length; i++) {
            if (data[i].location === "Limburg") {
            return data[i];
            }
        }
    }

    let getLocationPromise = getLocation();

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
    pContent='lijst met percentage gemeddeld nederland en gemiddeld per provincie...'>
    <section>
        {#await getLocationPromise}
            <p>...waiting</p>
        {:then locations}
            <p>{locations.location}</p>
            <!-- {#each locations as location}
                <LocationBubble 
                h3Text={location.location}
                pText={location.percentage+'%'}
                />
            {/each} -->
        {:catch error}
            <p style="color: red">{error.message}</p>
        {/await}
    </section>
    </Article>
    <Article 
    h2Content='Hoeveel invalide parkeerplekken zijn beschikbaar?'
    pContent='bar chart met invalide inwoners en percentages vermelden'/>
    <Article 
    h2Content='Hoeveel inwoners zijn er invalide?'
    pContent='bar chart met invalide inwoners en percentages vermelden'/>

</main>
