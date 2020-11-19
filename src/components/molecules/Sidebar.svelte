<script type="text/javascript">
  import Sidebar from '/src/components/atoms/Sidebar.svelte';
  import List from '/src/components/atoms/SidebarList.svelte';
  import SidebarItem from '/src/components/atoms/SidebarListItem.svelte';
  import H1 from '/src/components/atoms/HeaderSidebar.svelte';
    // export let name = 'unknown';
</script>


<Sidebar>
    <H1 content='Navigatie' class='navigationHeader'/>
    <List>
        <SidebarItem url='#problem' content='Het probleem'/>
        <SidebarItem url='#availibility' content='Beschikbaarheid'/>
        <SidebarItem url='#amount' content='Aantallen'/>
        <SidebarItem url='#percentage' content='Percentages'/>
        <SidebarItem url='#compare' content='Vergelijking'/>
    </List>
</Sidebar>