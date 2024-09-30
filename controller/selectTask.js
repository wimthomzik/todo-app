/* 
========================================
Function to select Tasks by id
======================================== 
*/

import removeTask from "./removeTask";
import { selected, currEdit, setSelected, resetSelected } from '../state/state';

export default function selectTask(id) {
    //  If already selected or currently added reject event
    if (selected === id || currEdit === id) {
        return;
    }

    //  If another item is selected -> deselect it
    if (selected) {
        const prevItem = document.querySelector(`[task-id="${selected}"]`);
        prevItem?.classList.remove('todo-item-selected');
    }

    //  Set selected to current
    setSelected(id);

    //  Change CSS 
    const item = document.querySelector(`[task-id="${id}"]`);
    item.classList.add('todo-item-selected');

    //  On backspace delete item / On outside Click deselect
    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleDelete);
}

/*
    Event Handlers
*/

export function handleDelete(e) {
    if (e.key === "Backspace" && selected && selected !== currEdit) {
        removeTask(selected);
        cleanUp();
    }
}

function handleClick(e) {
    const item = document.querySelector(`[task-id="${selected}"]`);
    if (!item.contains(e.target)) {
        item.classList.remove('todo-item-selected');
        cleanUp();
    }
}

//  Helper Function
function cleanUp() {
    document.removeEventListener('click', handleClick);
    document.removeEventListener('keydown', handleDelete);
    resetSelected();
}
