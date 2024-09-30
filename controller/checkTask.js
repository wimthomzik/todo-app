/* 
========================================
Check Task and apply changes to storage and then re-render page
======================================== 
*/

import { toggleComplete } from "../storage/storage";
import renderTasks from "../view/renderTasks";
export default function checkTask(id) {
    toggleComplete(id);
    setTimeout(() => renderTasks(), 500);
}   