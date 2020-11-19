<script>
  import BannerImage from '/src/components/atoms/BannerImage.svelte';
  import BannerTitle from '/src/components/atoms/BannerTitle.svelte';
</script>

<style>
    section{
        position: relative;
        z-index: 0;
    }
</style>

<section>
  <BannerImage src='/wheelchair.jpg' alt='wheelchair image'/>
  <BannerTitle content='Denkt u ook aan de <strong>invalide?</strong>'/>
</section>