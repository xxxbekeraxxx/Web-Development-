// DOM Elements
const newTaskInput = document.getElementById('new-task');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Initialize with example tasks from screenshot
const initialTasks = [
    { text: 'First item', completed: true },
    { text: 'Second item', completed: false },
    { text: 'Third item', completed: false }
];

// Initialize the application
function init() {
    // Load initial tasks
    initialTasks.forEach(task => {
        addTaskToDOM(task.text, task.completed);
    });
    
    // Set up event listeners
    setupEventListeners();
}

// Set up all event listeners
function setupEventListeners() {
    // Add button click
    addBtn.addEventListener('click', handleAddTask);
    
    // Enter key in input field
    newTaskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleAddTask();
        }
    });
    
    // Focus input on page load
    newTaskInput.focus();
}

// Handle adding a new task
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

// Add a task to the DOM
function addTaskToDOM(text, completed) {
    // Create list item element
    const listItem = document.createElement('li');
    listItem.className = 'todo-item';
    
    // Create checkbox element
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'todo-checkbox';
    checkbox.checked = completed;
    
    // Create text element
    const taskText = document.createElement('span');
    taskText.className = 'todo-text';
    taskText.textContent = text;
    
    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = '×';
    deleteBtn.setAttribute('aria-label', 'Delete task');
    
    // Append all elements to list item
    listItem.appendChild(checkbox);
    listItem.appendChild(taskText);
    listItem.appendChild(deleteBtn);
    
    // Add list item to the todo list
    todoList.appendChild(listItem);
    
    // Apply completed styling if needed
    if (completed) {
        listItem.classList.add('completed');
    }
    
    // Add event listeners to the new elements
    addTaskEventListeners(listItem, checkbox, deleteBtn);
}

// Add event listeners to task elements
function addTaskEventListeners(listItem, checkbox, deleteBtn) {
    // Checkbox change event
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            listItem.classList.add('completed');
        } else {
            listItem.classList.remove('completed');
        }
    });
    
    // Delete button click event
    deleteBtn.addEventListener('click', function() {
        todoList.removeChild(listItem);
    });
    
    // Task text click event (alternative way to toggle)
    const taskText = listItem.querySelector('.todo-text');
    taskText.addEventListener('click', function() {
        checkbox.checked = !checkbox.checked;
        checkbox.dispatchEvent(new Event('change'));
    });
}

// Show error message
function showError(message) {
    // Create error element
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
    
    // Insert after input section
    const inputSection = document.querySelector('.input-section');
    inputSection.appendChild(errorEl);
    
    // Remove error after 3 seconds
    setTimeout(() => {
        if (errorEl.parentNode) {
            errorEl.remove();
        }
    }, 3000);
}

// Start the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);