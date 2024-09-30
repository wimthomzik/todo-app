import './style.css'
import addTask from './controller/addTask';
import { openEdit } from './controller/editTask';
import renderTasks from './view/renderTasks';
import selectTask from './controller/selectTask';
import checkTask from './controller/checkTask';
import filterTask from './controller/filterTask';

//  Render tasks on refresh/load from browser storage
window.addEventListener('load', () => {
    renderTasks();
});

//  Add todo on button click
document.querySelector('.new-todo').addEventListener('click', () => addTask());

//  Open edit-window on dblclick
document.addEventListener('dblclick', (e) => {
    const item = e.target.closest('.todo-item')
    if (item) {
        openEdit(item.getAttribute('task-id'));
    }
});

//  Check task / Select task on click
document.addEventListener('click', (e) => {
    const item = e.target.closest('.todo-item');
    if (item) {
        e.target.closest('.todo-check') ?
            checkTask(item.getAttribute('task-id'))
            : selectTask(item.getAttribute('task-id'));
    }
});

//  Filter on input change
document.querySelector('.filter').addEventListener('change', (e) => {
    if (e.target.name === 'filter') {
        filterTask(e.target.value);
    }
});
