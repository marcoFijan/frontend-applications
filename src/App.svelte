<script type="text/javascript">
  import HomePage from '/src/components/pages/HomePage.svelte';
</script>

<style>
  :global(body){
    margin: 0 auto;
    max-width: 1100px;
    background-image: url('/background.svg');
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    box-sizing: border-box;
  }

  :global(strong){
    color: #dd9536;
    font-size: 110%;
  }

  :global(*){
    scroll-behavior: smooth; 
  }
  
</style>

<HomePage/>


<!-- <section>
  <BannerImage src='/public/wheelchair.jpg' alt='wheelchair image'/>
  <BannerTitle content='Denk aan de invalide!'/>
</section> -->


