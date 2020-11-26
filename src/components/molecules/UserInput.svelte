<script>
    // IMPORTS
    import Select from '/src/components/atoms/Select.svelte';
    import Option from '/src/components/atoms/Option.svelte';
    import Button from '/src/components/atoms/CustomButton.svelte';
    import P from '/src/components/atoms/Paragraph.svelte';
    import H3 from '/src/components/atoms/Header3.svelte';

    // EXPORTS
    export let dataRDW;
    export let dataCBS;

    // VARIABLES
    let selected;
    let selectedProvince;
    let hasSelected = false;
    let enough = '';
    let hasPercentage;
    let mustPercentage;
    const provinces = ['Groningen', 'Friesland', 'Overijssel', 'Drenthe', 'Gelderland', 'Limburg', 'Noord-Brabant', 'Zuid-Holland', 'Noord-Holland', 'Zeeland', 'Utrecht', 'Flevoland']

    // FUNCTIONS
    function handleSubmit(){
        hasSelected = true;
        console.log(selected);
        console.log(dataRDW);
        console.log(dataCBS);
        hasPercentage = (dataRDW.filter(index => index.province === selected.toLowerCase()))[0].percentageAvailible.toFixed(2);
        mustPercentage = (dataCBS.filter(index => index.location.toLowerCase() === selected.toLowerCase()))[0].percentage.toFixed(2);
        selectedProvince = selected;
        if(hasPercentage < mustPercentage){
            enough = 'NIET';
        }
        else{
            enough = '';
        }
    }
</script>

<!-- STYLING -->
<style>
    form{
        width: 100%;
        display: flex;
        justify-content: center;
    }
</style>

<!-- MARKUP -->
<form>
    <!-- DROPDOWN -->
	<Select bind:value={selected} selectEvent={handleSubmit}>
        <Option value="" isDisabled={true} isSelected={true}>Selecteer je provincie</Option>
		{#each provinces as province}
			<Option value={province}>
				{province}
            </Option>
		{/each}
    </Select>
</form>

<!-- SHOW RESULTS IN TEXT -->
<P content='Kies hierboven je provincie om te zien of jou provincie voldoende toegankelijke parkeergelegenheden heeft voor minder valide mensen'/>
{#if hasSelected}
    <H3 content='{selectedProvince} heeft <strong>{enough} genoeg</strong> parkeerplekken voor haar invalide inwoners. '/>
    <P content='<strong>{hasPercentage}%</strong> Van alle parkeerplekken in {selectedProvince} zijn toegankelijk voor lichamelijk gehandicapten. In {selectedProvince} heeft {mustPercentage}% van de bevolking 1 of meerdere lichamelijke beperkingen. Daarom zouden er dus ook minstens {mustPercentage}% van de parkeerplaatsen beschikbaar moeten zijn voor lichamelijk gehandicapten.'/>
{:else}
    <P content='Nog geen provincie geselecteerd'/>
{/if}