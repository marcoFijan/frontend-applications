<script type="text/javascript">
  import Nav from '/src/components/atoms/Nav.svelte';
  import List from '/src/components/atoms/NavList.svelte';
  import NavItem from '/src/components/atoms/NavItem.svelte';
    // export let name = 'unknown';
</script>

<style>
    :global(.navList){
        flex-direction: row;
        background: red;
  }
</style>

<Nav>
    <List class="navList">
        <NavItem url='#problem' content='Home'/>
        <NavItem url='#availibility' content='Fetchen van Data'/>
        <NavItem url='#amount' content='Bronnen'/>
    </List>
</Nav>