import { writable } from "svelte/store";

let data = {
  hasNoBigBar: false,
  isPercentage: false,
  hasKnown: false,
};

let storedData = JSON.parse(localStorage.getItem("filters"));
const FilterStore = writable(storedData || data);

export default FilterStore;
FilterStore.subscribe((value) => {
  localStorage.setItem(
    "filters",
    value === null ? JSON.stringify(data) : JSON.stringify(value)
  );
});
