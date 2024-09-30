/* 
========================================
Function to set filter and re-render page
======================================== 
*/

import { setFilter } from "../state/filter";
import renderTasks from "../view/renderTasks";

export default function filterTask(newFilter) {
    setFilter(newFilter);
    renderTasks();
}


