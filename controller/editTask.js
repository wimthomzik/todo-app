/* 
========================================
Functions to edit tasks by id
======================================== 
*/

import { currEdit, setCurrEdit, resetCurrEdit } from '../state/state.js';
import { updateTask } from '../storage/storage';

/*
    Functions to open close task
*/

export function openEdit(id) {
    //  Check if not already opened to edit
    if (id === currEdit) return;

    //  If already editing one item close it
    if (currEdit) closeEdit(currEdit);

    //  Get handles for DOM-elements
    const { item, title, notes, contentContainer } = getHandles(id);
    //  Set current task to the one currently edited
    setCurrEdit(id);

    //  Change css for DOM-elements
    item.classList.add('todo-item-expand');
    contentContainer.classList.add('content-container-expand');
    notes.classList.add('notes-visible');
    title.removeAttribute('readonly');
    title.focus();

    //  On Enter close / On outside-click close
    document.addEventListener('keydown', handleKeydown);
    document.addEventListener('click', handleClick);
}

function closeEdit(id) {
    //  Get handles for DOM-elements
    const { item, title, notes, contentContainer } = getHandles(id);

    updateTask(id);
    title.setAttribute('readonly', true);
    item.classList.remove('todo-item-expand');
    notes.classList.remove('notes-visible');
    contentContainer.classList.remove('content-container-expand');

    document.removeEventListener('keydown', handleKeydown);
    document.removeEventListener('click', handleClick);
    resetCurrEdit();
}

/*
    Event Handlers
*/

function handleKeydown(e) {
    if (e.key === 'Enter' && !e.target.classList.contains('notes')) {
        closeEdit(currEdit);
    }
}

function handleClick(e) {
    const item = document.querySelector(`[task-id="${currEdit}"]`);
    if (!item.contains(e.target)) {
        closeEdit(currEdit);
    }
}

// Helper Function

function getHandles(id) {
    const item = document.querySelector(`[task-id="${id}"]`);
    const title = item.querySelector('.todo-title');
    const notes = item.querySelector('.notes');
    const contentContainer = item.querySelector('.content-container');
    return { item, title, notes, contentContainer };
}
