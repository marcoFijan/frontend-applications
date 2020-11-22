import { writable } from "svelte/store";

let data = [];

const CBSStore = writable(data);

export default CBSStore;
