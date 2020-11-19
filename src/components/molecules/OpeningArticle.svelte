<script>
      import H1 from '/src/components/atoms/Header1.svelte';
      import H2 from '/src/components/atoms/Header2.svelte';
      import P from '/src/components/atoms/Paragraph.svelte';
      export let h1Content;
      export let pContent;
      export let extraContent = '';
</script>

<style>
    article{
        padding: 1em 3em;
    }
</style>

<article>
    <H1 content={h1Content}/>
    <P content={pContent}/>
    {extraContent}
</article>