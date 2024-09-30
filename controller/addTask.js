/* 
========================================
Add Task to Storage and re-render page
======================================== 
*/

import renderTasks from "../view/renderTasks";
import { addTodo } from "../storage/storage";
import Todo from "../model/todo";
import { openEdit } from "./editTask";

export default function addTask() {
    let newTodo = new Todo();
    addTodo(newTodo);
    renderTasks();
    setTimeout(() => openEdit(newTodo.id), 30);
}