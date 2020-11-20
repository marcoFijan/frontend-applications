<script>
    export let content = 'Header 1';
</script>

<style>
    h1{
        font-size: 4em;
        padding: 0;
        width: 8em;
        right: 10%;
        margin-top: 11vh;
        color: white;
        font-weight: normal;
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        position: absolute;
        text-align: right;
        text-shadow: 2px 2px black;
    }
</style>

<h1>{@html content}</h1>