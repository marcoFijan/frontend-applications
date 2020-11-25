<script>
    // export let buttonEvent;
    export let buttonText;

    // function handleClick(){
    //    selected = !selected;
    //    customEvent();
    // }

    // function customEvent(){
    //     { buttonEvent } ;
    // }
</script>

<style>
    button{
        background: white;
        font-size: 1em;
        color: #236E96;
        border: 1px solid #236E96;
        border-radius: 2em;
        padding: .5em 1em;
        min-width: 10em;
        margin: .5em;
        font-family: 'Roboto', sans-serif;
    }
    button:hover{
        transition: .5s ease-in;
        font-weight: 500;
        cursor: pointer;
    }

    button:focus{
        background: #236E96;
        font-size: 1em;
        color: white;
        font-weight: 500;
    }
</style>

<button type=submit>
    {buttonText}
</button>