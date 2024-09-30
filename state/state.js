/* 
========================================
Current State of the application and functions to modify the state
======================================== 
*/

// Track the currently edited item
export let currEdit = null;

// Track the currently selected item
export let selected = null;

// Helper functions 
export function setCurrEdit(id) {
    currEdit = id;
}

export function setSelected(id) {
    selected = id;
}

export function resetCurrEdit() {
    currEdit = null;
}

export function resetSelected() {
    selected = null;
}
