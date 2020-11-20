<script>
    import Bubble from '/src/components/atoms/Bubble.svelte';
    import P from '/src/components/atoms/Paragraph.svelte';
    import H3 from '/src/components/atoms/Header3.svelte';
    export let h3Text;
    export let pText;
</script>

<style>
    p{
        font-size: 3em;
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
    }
</style>

<Bubble>
  <H3 content={h3Text}/>
  <p>{pText}</p>
</Bubble>