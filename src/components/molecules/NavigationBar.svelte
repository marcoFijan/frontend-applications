<script type="text/javascript">
  import Nav from '/src/components/atoms/Nav.svelte';
  import NavList from '/src/components/atoms/NavList.svelte';
  import NavListItem from '/src/components/atoms/NavListItem.svelte';
  import H1 from '/src/components/atoms/HeaderNavigation.svelte';
    // export let name = 'unknown';
</script>


<Nav>
    <H1 content='Navigatie' class='navigationHeader'/>
    <NavList>
        <NavListItem url='#problem' content='Het probleem'/>
        <NavListItem url='#availibility' content='Beschikbaarheid'/>
        <NavListItem url='#amount' content='Aantallen'/>
        <NavListItem url='#percentage' content='Percentages'/>
        <NavListItem url='#compare' content='Vergelijking'/>
    </NavList>
</Nav>