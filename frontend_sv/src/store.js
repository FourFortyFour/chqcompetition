import { writable } from "svelte/store";

export const loading = writable(false);

export const success = writable(true);

export const planData = writable({})
