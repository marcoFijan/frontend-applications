<script>
    export let content = 'Header 1';
</script>

<style>
    h1{
        font-size: 4em;
        padding: 0;
        margin-top: 10%;
        color: #2A292F;
        font-weight: normal;
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
    }
</style>

<h1>{@html content}</h1>