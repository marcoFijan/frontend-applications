import { writable } from "svelte/store";

let provinces = [
  {
    name: "Groningen",
    clicked: false,
  },
  {
    name: "Friesland",
    clicked: false,
  },
  {
    name: "Overijssel",
    clicked: false,
  },
  {
    name: "Drenthe",
    clicked: false,
  },
  {
    name: "Gelderland",
    clicked: false,
  },
  {
    name: "Limburg",
    clicked: false,
  },
  {
    name: "Noord-Brabant",
    clicked: false,
  },
  {
    name: "Zuid-Holland",
    clicked: false,
  },
  {
    name: "Noord-Holland",
    clicked: false,
  },
  {
    name: "Zeeland",
    clicked: false,
  },
  {
    name: "Utrecht",
    clicked: false,
  },
  {
    name: "Flevoland",
    clicked: false,
  },
  {
    name: "Nederland",
    clicked: false,
  },
];

let storedProvinces = JSON.parse(localStorage.getItem("provincesList"));
const CBSProvincesStore = writable(storedProvinces || provinces);

export default CBSProvincesStore;
CBSProvincesStore.subscribe((value) => {
  localStorage.setItem(
    "provincesList",
    value === null ? JSON.stringify(provinces) : JSON.stringify(value)
  );
});
