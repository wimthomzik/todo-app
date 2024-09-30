
import { getTodos } from "../storage/storage";
import { filter } from "../state/filter";

export default function renderTasks() {
    
    //  Get filtered todos from storage 
    const filteredTasks = getTodos().filter((task) => (!task.isCompleted && filter === 'active') || (task.isCompleted && filter === 'completed'));
    
    const taskList = document.querySelector('.todo-list');

    //  Fill todo-list container
    if (filteredTasks.length === 0 && filter === 'active') {
        taskList.innerHTML = 'Click "+" to add new task.';
        taskList.classList.add('ul-empty');
    } else if (filteredTasks.length === 0 && filter === 'completed'){
        taskList.innerHTML = 'Logbook is empty.';
        taskList.classList.add('ul-empty');
    } else {
        taskList.innerHTML = '';
        taskList.classList.remove('ul-empty');
    }

    //  Generate DOM-element for each task
    filteredTasks.forEach((task) => {
        const taskItem = document.createElement('li');
        taskItem.classList.add('todo-item');
        taskItem.setAttribute('task-id', task.id);

        //  Create checkbox container
        const checkboxContainer = document.createElement('div');
        checkboxContainer.className = 'checkbox-container';

        //  Create checkbox for task completion
        const todoCheckBox = document.createElement('input');
        todoCheckBox.type = 'checkbox';
        todoCheckBox.classList.add('todo-check');
        todoCheckBox.checked = task.isCompleted;

        checkboxContainer.appendChild(todoCheckBox);

        //  Create container for content
        const contentContainer = document.createElement('div');
        contentContainer.className = 'content-container';

        //  Create input field for task title
        const titleInput = document.createElement('input');
        titleInput.type = 'text';
        titleInput.classList.add('todo-title');
        titleInput.value = task.title;
        titleInput.placeholder = 'New To-Do';
        titleInput.setAttribute('readonly', true);

        //  Create input field for task notes
        const notesInput = document.createElement('textarea');
        notesInput.classList.add('notes');
        notesInput.placeholder = 'Notes';
        notesInput.value = task.notes;

        //  Append notes input to todo-details
        contentContainer.appendChild(titleInput);
        contentContainer.appendChild(notesInput);

        //  Append header and details to the taskItem
        taskItem.appendChild(checkboxContainer);
        taskItem.appendChild(contentContainer);

        //  Append Task to task-list
        taskList.appendChild(taskItem);
    });
}