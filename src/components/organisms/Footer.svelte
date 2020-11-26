<script>
    import Block from '/src/components/molecules/FooterBlock.svelte';
</script>

<style>
    footer{
        background: #236E96;
        color: white;
        text-align: center;
        margin: 0 0 1em 0;
        padding: 2em 7em;
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        display: flex;
        justify-content: space-between;
    }
    a{
        display: block;
        color: white;
        text-decoration: none;

    }
    a:hover{
        text-decoration: underline;
    }
</style>

<footer>
    <Block
        h3Content='Bronnen'>
        <a href='https://npropendata.rdw.nl/parkingdata/v2/'>RDW Parkingdata</a>
        <a href='https://opendata.cbs.nl/statline/#/CBS/nl/dataset/83674NED/table?ts=1603802261246'>CBS Statline: Gezondheidsmonitor</a>
    </Block>
    <Block
        h3Content='Ontworpen door'>
        <p>Marco Fijan</p>
    </Block>
    <Block
        h3Content='In opdracht van'>
        <p>De volkskrant</p>
    </Block>
</footer>
