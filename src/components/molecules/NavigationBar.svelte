<script type="text/javascript">
  import Nav from '/src/components/atoms/Nav.svelte';
  import List from '/src/components/atoms/NavList.svelte';
  import NavItem from '/src/components/atoms/NavItem.svelte';
    // export let name = 'unknown';
</script>

<style>
 
</style>

<Nav>
    <List>
        <NavItem url='#home' content='Home'/>
        <NavItem url='#uwprov' content='Vergelijk'/>
        <NavItem url='#amount' content='Aantal gehandicapten'/>
        <NavItem url='#chart' content='Diagram'/>
        <NavItem url='#how' content='Opschonen data'/>
    </List>
</Nav>