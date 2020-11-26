<script>
      import H3 from '/src/components/atoms/Header3.svelte';
      import P from '/src/components/atoms/Paragraph.svelte';
      export let h3Content;
      export let pContent;
</script>

<style>
    section{
        padding: 0;
        margin: 0;
    }
</style>

<section>
    <H3 content={h3Content}/>
    <P content={pContent}/>
    <slot/>
</section>