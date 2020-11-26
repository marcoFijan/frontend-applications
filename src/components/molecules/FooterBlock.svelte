<script>
    import H3 from '/src/components/atoms/Header3.svelte';
    import P from '/src/components/atoms/Paragraph.svelte';

    export let h3Content;
</script>

<style>
    section{
        text-align: left;
        color: white;
    }
</style>

<section>
    <H3 content={h3Content}/>
    <slot/>
</section>

