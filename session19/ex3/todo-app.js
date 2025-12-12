let todos = JSON.parse(localStorage.getItem('todos')) || [];

const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
const taskCount = document.getElementById('taskCount');
const clearBtn = document.getElementById('clearBtn');

function addTodo() {
    const text = todoInput.value.trim();
    if (text === '') return;
    
    const todo = {
        id: Date.now(),
        text: text
    };
    
    todos.push(todo);
    todoInput.value = '';
    saveTodos();
    renderTodos();
}

function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    saveTodos();
    renderTodos();
}

function clearAll() {
    todos = [];
    saveTodos();
    renderTodos();
}

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function updateTaskCount() {
    const count = todos.length;
    taskCount.textContent = `You have ${count} pending task${count !== 1 ? 's' : ''}`;
}

function renderTodos() {
    todoList.innerHTML = '';
    
    todos.forEach(todo => {
        const div = document.createElement('div');
        div.className = 'todo-item';
        div.innerHTML = `
            <span>${todo.text}</span>
            <button class="delete-btn" onclick="deleteTodo(${todo.id})">🗑</button>
        `;
        todoList.appendChild(div);
    });
    
    updateTaskCount();
}

addBtn.addEventListener('click', addTodo);
clearBtn.addEventListener('click', clearAll);
todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTodo();
});

renderTodos();