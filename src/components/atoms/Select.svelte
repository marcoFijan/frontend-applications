<script>
    export let selectEvent;
    export let value;

    export function getSelected(){
        return selected;
    }
</script>

<style>
    select{
        background: white;
        font-size: 1em;
        color: #0077cc;
        border: 1px solid #0077cc;
        border-radius: 2em;
        padding: .5em 1em;
        min-width: 15em;
        margin: .5em;
        font-family: 'Roboto', sans-serif;
        text-align: center;
        text-align-last: center;
        transition: .5s ease-in;
    }
    select:focus{
        color:white;
        background: #0077cc;
        outline: none;
    }
</style>

<!-- svelte-ignore a11y-no-onchange -->
<select bind:value={value} on:change="{selectEvent}">
    <slot/>
</select>