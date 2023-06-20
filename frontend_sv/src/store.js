import { writable } from "svelte/store";

export const loading = writable(false);
export const error = writable(false);
export const success = writable(false);

export const planData = writable({})
