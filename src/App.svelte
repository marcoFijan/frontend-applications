<script type="text/javascript">
  import Nested from './Nested.svelte';
  import H1 from '/src/components/atoms/Header1.svelte';
  import H2 from '/src/components/atoms/Header2.svelte';
  import H3 from '/src/components/atoms/Header3.svelte';
  import H4 from '/src/components/atoms/Header4.svelte';
  import P from '/src/components/atoms/Paragraph.svelte';
  import NavBar from '/src/components/molecules/NavigationBar.svelte';
  import Home from '/src/components/templates/Home.svelte';
  import BannerImage from '/src/components/atoms/BannerImage.svelte';
  import BannerTitle from '/src/components/atoms/BannerTitle.svelte';
  // import Nav from '/src/components/atoms/Nav.svelte';
  // import NavList from '/src/components/atoms/NavList.svelte';
  // import NavListItem from '/src/components/atoms/NavListItem.svelte';
  // export let name = 'unknown';
</script>

<style>
  :global(body){
    margin: 0 auto;
    max-width: 1200px;
    background-image: url('/background.svg');
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    box-sizing: border-box;
  }

  :global(strong){
    color: #0077cc;
  }

  
</style>

<Home/>

<!-- <section>
  <BannerImage src='/public/wheelchair.jpg' alt='wheelchair image'/>
  <BannerTitle content='Denk aan de invalide!'/>
</section> -->


