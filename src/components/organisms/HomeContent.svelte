<script>
    import { onMount } from 'svelte'
    import OpeningArticle from '/src/components/molecules/OpeningArticle.svelte';
    import OpeningBanner from '/src/components/molecules/OpeningBanner.svelte';
    import Article from '/src/components/molecules/Article.svelte';
    import LocationBubble from '/src/components/molecules/LocationBubble.svelte';
    // import Sidebar from '/src/components/molecules/Sidebar.svelte';

    const cbsUrl = 'https://raw.githubusercontent.com/marcoFijan/hostRDWData/main/provincesCBS.json';
    let provinces = [];


    onMount(async function() {
        const response = await fetch(cbsUrl);
        provinces = await response.json();
        console.log(provinces)
    });

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
        grid-template-columns: repeat(auto-fill, minmax(10em, 1fr));
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
    {#each provinces as province}
      <LocationBubble 
      h3Text={province.province}
      pText={province.percentage}
      />
    {/each}
    </section>

    </Article>
    <Article 
    h2Content='Hoeveel invalide parkeerplekken zijn beschikbaar?'
    pContent='bar chart met invalide inwoners en percentages vermelden'/>
    <Article 
    h2Content='Hoeveel inwoners zijn er invalide?'
    pContent='bar chart met invalide inwoners en percentages vermelden'/>

</main>
