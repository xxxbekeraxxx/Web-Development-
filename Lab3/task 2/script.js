const newTaskInput = document.getElementById('new-task');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

const initialTasks = [
    { text: 'First item', completed: true },
    { text: 'Second item', completed: false },
    { text: 'Third item', completed: false }
];

function init() {
    initialTasks.forEach(task => {
        addTaskToDOM(task.text, task.completed);
    });
    
    setupEventListeners();
}

function setupEventListeners() {
    addBtn.addEventListener('click', handleAddTask);
    
    newTaskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleAddTask();
        }
    });
    
    newTaskInput.focus();
}

function handleAddTask() {
    const taskText = newTaskInput.value.trim();
    
    if (taskText === '') {
        showError('Please enter a task');
        return;
    }
    
    addTaskToDOM(taskText, false);
    newTaskInput.value = '';
    newTaskInput.focus();
}

function addTaskToDOM(text, completed) {
    const listItem = document.createElement('li');
    listItem.className = 'todo-item';
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'todo-checkbox';
    checkbox.checked = completed;
    
    const taskText = document.createElement('span');
    taskText.className = 'todo-text';
    taskText.textContent = text;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = '×';
    deleteBtn.setAttribute('aria-label', 'Delete task');
    
    listItem.appendChild(checkbox);
    listItem.appendChild(taskText);
    listItem.appendChild(deleteBtn);
    
    todoList.appendChild(listItem);
    
    if (completed) {
        listItem.classList.add('completed');
    }
    
    addTaskEventListeners(listItem, checkbox, deleteBtn);
}

function addTaskEventListeners(listItem, checkbox, deleteBtn) {
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            listItem.classList.add('completed');
        } else {
            listItem.classList.remove('completed');
        }
    });
    
    deleteBtn.addEventListener('click', function() {
        todoList.removeChild(listItem);
    });
    
    const taskText = listItem.querySelector('.todo-text');
    taskText.addEventListener('click', function() {
        checkbox.checked = !checkbox.checked;
        checkbox.dispatchEvent(new Event('change'));
    });
}

function showError(message) {
    const errorEl = document.createElement('div');
    errorEl.className = 'error-message';
    errorEl.textContent = message;
    errorEl.style.cssText = `
        color: #FF3B30;
        font-size: 14px;
        margin-top: 8px;
        padding: 8px 12px;
        background-color: rgba(255, 59, 48, 0.1);
        border-radius: 6px;
        animation: fadeIn 0.3s ease;
    `;
    
    const inputSection = document.querySelector('.input-section');
    inputSection.appendChild(errorEl);
    
    setTimeout(() => {
        if (errorEl.parentNode) {
            errorEl.remove();
        }
    }, 3000);
}

document.addEventListener('DOMContentLoaded', init);
