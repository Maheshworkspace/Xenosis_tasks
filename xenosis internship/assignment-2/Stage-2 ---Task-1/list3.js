document.addEventListener('DOMContentLoaded', function() {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
  
    // Load tasks from localStorage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  
    // Function to render tasks
    function renderTasks() {
      todoList.innerHTML = '';
      tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
          <span class="task ${task.completed ? 'completed' : ''}">${task.name}</span>
          <div>
            <button class="complete-button">${task.completed ? 'Incomplete' : 'Complete'}</button>
            <button class="edit-button">Edit</button>
            <button class="delete-button">Delete</button>
          </div>
        `;
        // Event listeners for buttons
        const completeButton = li.querySelector('.complete-button');
        const editButton = li.querySelector('.edit-button');
        const deleteButton = li.querySelector('.delete-button');
  
        completeButton.addEventListener('click', () => {
          task.completed = !task.completed;
          saveTasks();
          renderTasks();
        });
  
        editButton.addEventListener('click', () => {
          const newTaskName = prompt('Edit task:', task.name);
          if (newTaskName !== null) {
            task.name = newTaskName.trim();
            saveTasks();
            renderTasks();
          }
        });
  
        deleteButton.addEventListener('click', () => {
          if (confirm(`Are you sure you want to delete "${task.name}"?`)) {
            tasks.splice(index, 1);
            saveTasks();
            renderTasks();
          }
        });
  
        todoList.appendChild(li);
      });
    }
  
    // Function to save tasks to localStorage
    function saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  
    // Handle form submission
    todoForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const taskName = todoInput.value.trim();
      if (taskName !== '') {
        tasks.push({ name: taskName, completed: false });
        saveTasks();
        renderTasks();
        todoInput.value = '';
      }
    });
  
    // Initial render of tasks
    renderTasks();
  });
  