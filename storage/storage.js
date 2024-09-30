/* 
========================================
Functions for applying changes to the local storage array of todo-items
======================================== 
*/

function getTodos() {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
}

function saveTodos(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function addTodo(todo) {
    const todos = getTodos();
    todos.unshift(todo);
    saveTodos(todos);
}

function removeTodo(id) {
    const todos = getTodos().filter((todo) => todo.id !== id);
    saveTodos(todos);
}

function toggleComplete(id) {
    const todos = getTodos().map((todo) => {
        if (todo.id === id) {
            todo.isCompleted = !todo.isCompleted;
        }
        return todo;
    });
    saveTodos(todos);
}

function updateTask(id) {
    const item = document.querySelector(`[task-id="${id}"]`);
    const title = item.querySelector('.todo-title');
    const notes = item.querySelector('.notes');
    const todos = getTodos();

    const todo = todos.find((todo) => todo.id === id);
    if (todo) {
        todo.title = title.value;
        todo.notes = notes.value;
        saveTodos(todos);
    }
}

export { getTodos, addTodo, removeTodo, toggleComplete, updateTask };