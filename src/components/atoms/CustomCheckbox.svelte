<script>
    export let checkboxEvent;
    export let labelText;
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
    label{
        /* color: #BA3E8D; */
        background: white;
        font-size: 1em;
        color: #0077cc;
        border: 1px solid #0077cc;
        border-radius: 2em;
        padding: .5em 1em;
        min-width: 10em;
        margin: .5em;
        font-family: 'Roboto', sans-serif;
    }

    input{
        display: none;
    }

    label:hover{
        transition: .5s ease-in;
        font-weight: 500;
        cursor: pointer;
    }

    input:checked + label{
        background: #0077cc;
        font-size: 1em;
        color: white;
        font-weight: 500;
    }

    /* .selection{
        background: #0077cc;
        font-size: 1em;
        color: white;
    } */
</style>


    <input type=checkbox on:click={checkboxEvent} bind:checked={selected} id='{labelText}' name='{labelText}'>
    <label for='{labelText}'>{labelText}</label>
