<script>
    export let isDisabled = false;
    export let isSelected = false;
    export let value;
</script>

<style>
    option{
        border: none;
        border-radius: 1em;
    }
</style>

<option value={value} disabled={isDisabled} selected={isSelected}>
    <slot/>
</option>