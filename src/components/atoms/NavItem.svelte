<script>
    export let url = '/';
    export let content = 'NavigatieItem'
</script>
  
<style>
    a{
        text-decoration: none;
    }
    li{
        color: white;
        padding: 1em 2em;
        font-size: 1.1em;
        box-sizing: border-box;
        text-align: center;
        transition: all .3s ease-in;
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        text-shadow: .05em .05em black;
    }
    li:hover{
        color: #dd9536;
        font-weight: 500;
    }
</style>
  
<a href={url}><li>{content}</li></a>