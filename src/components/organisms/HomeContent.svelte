<script>
    import Article from '/src/components/molecules/Article.svelte';
    import OpeningBanner from '/src/components/molecules/OpeningBanner.svelte';
    // import Sidebar from '/src/components/molecules/Sidebar.svelte';
</script>

<style>
    main{
        background: white;
        height: 100vh;
    }
</style>
<!-- <Sidebar/> -->

<main>
    <OpeningBanner/>
    <Article 
      h1Content='Het probleem' 
      pContent='In Nederland zijn er, volgens de cijfers van het CBS, gemiddeld 12% inwoners van een stad met een lichamelijke beperking. Dit vind ik een aardig hoog percentage. Niet alle mensen met een lichamelijke beperking zullen zelf auto kunnen rijden. Maar deze mensen kunnen natuurlijk wel vervoerd of gebracht worden met de auto. Wanneer een parkeergarage in een centrum dan niet toegankelijk is voor lichamelijk gehandicapten, kan dat betekenen dat zij niet even kunnen winkelen of shoppen. Zelfde geld voor simpelweg de boodschappen doen in een supermarkt. Aangezien ik in de dataset van RWD best veel nullen zag staan (geen toegang voor lichamelijk gehandicapten), leek het mij interessant om te onderzoeken waar nu precies die parkeerplaatsen staan.'
    />
</main>
