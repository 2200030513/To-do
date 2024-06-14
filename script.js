// script.js
document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
    const categorySelect = document.getElementById('categorySelect');
    const dueDate = document.getElementById('dueDate');

    addTaskBtn.addEventListener('click', addTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        const category = categorySelect.value;
        const date = dueDate.value;

        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');

        taskItem.innerHTML = `
            <span>${taskText} (${category}, ${date})</span>
            <div class="actions">
                <button class="complete">Complete</button>
                <button class="delete">Delete</button>
            </div>
        `;

        taskList.appendChild(taskItem);

        taskInput.value = '';
        categorySelect.value = 'default';
        dueDate.value = '';

        const completeBtn = taskItem.querySelector('.complete');
        const deleteBtn = taskItem.querySelector('.delete');

        completeBtn.addEventListener('click', () => {
            taskItem.classList.toggle('completed');
        });

        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });
    }
});
