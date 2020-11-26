<script>
    import NavBar from '/src/components/molecules/NavigationBar.svelte';
</script>

<style>
    header{
        margin:0;
        width: 100%;
        max-width: 1100px;
        position: fixed;
        z-index: 100;
        background: linear-gradient(rgba(75, 75, 75, 0.7), rgba(0,212,255,0));
    }
</style>
<header>
    <NavBar/>
</header>
