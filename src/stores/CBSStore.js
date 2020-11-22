import { writable } from "svelte/store";

let data = [];

let storedData = JSON.parse(localStorage.getItem("provincesValues"));
const CBSStore = writable(storedData || data);

export default CBSStore;
CBSStore.subscribe((value) => {
  localStorage.setItem(
    "provincesValues",
    value === null ? JSON.stringify(data) : JSON.stringify(value)
  );
});
