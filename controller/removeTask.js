/* 
========================================
Functions to remove task by id
======================================== 
*/

import { removeTodo } from "../storage/storage";
import renderTasks from "../view/renderTasks";

export default function removeTask(id) {
    removeTodo(id);
    renderTasks();
}