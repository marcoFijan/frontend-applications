<script>
    import Navigation from '/src/components/organisms/Navigation.svelte';
    import Header from '/src/components/organisms/Header.svelte';
    import HomeContent from '/src/components/organisms/HomeContent.svelte';
    import Footer from '/src/components/organisms/Footer.svelte';

    // Export
    export let dataRDW;
    export let dataCBS;
</script>
  
  <style>
  </style>
    <Header/>
    <HomeContent dataRDW={dataRDW} dataCBS={dataCBS}/>
    <Footer/>

  <!-- <Nav>
    <NavList>
        <NavListItem url='tweakers.net' content='tweakers'/>
    </NavList>
  </Nav> -->
  <!-- <style>
    
  </style> -->
  
  