<script type="text/javascript">
  import Nested from './Nested.svelte';
  import H1 from '/src/components/atoms/Header1.svelte';
  import H2 from '/src/components/atoms/Header2.svelte';
  import H3 from '/src/components/atoms/Header3.svelte';
  import H4 from '/src/components/atoms/Header4.svelte';
  import P from '/src/components/atoms/Paragraph.svelte';
  import NavBar from '/src/components/molecules/NavigationBar.svelte';
  import Home from '/src/components/templates/Home.svelte';
  // import Nav from '/src/components/atoms/Nav.svelte';
  // import NavList from '/src/components/atoms/NavList.svelte';
  // import NavListItem from '/src/components/atoms/NavListItem.svelte';
  // export let name = 'unknown';
</script>

<style>
  :global(body){
    margin: 0;
    display: flex;
  }
</style>
<Home/>

<!-- <NavBar/> -->


<H1 content='test'/>
<P content='Welkom op mijn svelte template'/>
<H2 content='hoi'/>
<P content='Ik ben nog veel aan het spelen'/>
<H3 content='ding'/>
<P content='Maar langzaam maar zeker begin ik het te'/>
<H4 content='pizza'/>
<!-- <Nav>
  <NavList>
      <NavListItem url='tweakers.net' content='tweakers'/>
  </NavList>
</Nav> -->
<!-- <style>
  
</style> -->


