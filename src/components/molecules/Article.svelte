<script>
      import H2 from '/src/components/atoms/Header2.svelte';
      import P from '/src/components/atoms/Paragraph.svelte';
      export let h2Content;
      export let pContent;
      export let extraContent = '';
</script>

<style>
    article{
        padding: 1em 3em;
        padding-top: 50em;
    }
</style>

<article>
    <H2 content={h2Content}/>
    <P content={pContent}/>
    {extraContent}
</article>