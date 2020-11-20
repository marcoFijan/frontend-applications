import { writable } from "svelte/store";

const cbsUrl =
  "https://raw.githubusercontent.com/marcoFijan/hostRDWData/main/provincesCBS.json";
let disabledAmount = [];

async function getData() {
  const response = await fetch(cbsUrl);
  disabledAmount = await response.json();
}

const data = getData();

const CBSStore = writable(data);

export default CBSStore;
