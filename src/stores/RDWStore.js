import { writable } from "svelte/store";

let data = [];

let storedData = JSON.parse(localStorage.getItem("chartValues")); // convert back to json from localstorage string
const RDWStore = writable(storedData || data);

export default RDWStore;
RDWStore.subscribe((value) => {
  localStorage.setItem(
    "chartValues",
    value === null ? JSON.stringify(data) : JSON.stringify(value) // localstorage only supports strings: convert
  );
});
