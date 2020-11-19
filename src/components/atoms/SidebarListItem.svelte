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
        padding: 1.5em;
        box-sizing: border-box;
        width: 100%;
        text-align: center;
        transition: all .3s ease-in;
        border-bottom: .01px solid rgb(184, 184, 184);
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
    }
    li:hover{
        background: #242F33;
    }
</style>
  
<a href={url}><li>{content}</li></a>