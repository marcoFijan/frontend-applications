<script>
    export let buttonEvent;
    export let buttonText;
    export let selected = false;

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
        /* color: #BA3E8D; */
        background: white;
        font-size: 1em;
        color: #0077cc;
        border: 1px solid #0077cc;
        border-radius: 2em;
        padding: 1em;
        width: 10em;
        margin: .1em .5em;
    }
    button:hover{
        background: #dd9536;
        transition: .3s ease-in;
        
    }

    .selection{
        background: #0077cc;
        font-size: 1em;
        color: white;
    }
</style>

<button class='{selected ? 'selection': ''}' on:click={buttonEvent}>
    {buttonText}
</button>