document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const tr = createTaskElement(taskText);
    document.getElementById('taskList').appendChild(tr);
    taskInput.value = '';
});

function createTaskElement(taskText) {
    const tr = document.createElement('tr');

    // Calculate the task number based on the current number of tasks
    const taskNo = document.getElementById('taskList').children.length + 1;

    const tdNo = document.createElement('td');
    tdNo.textContent = taskNo; // Shows the task number

    const tdTask = document.createElement('td');
    tdTask.textContent = taskText; // Shows the task name

    const tdAction = document.createElement('td');

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', function() {
        const newTaskText = prompt('Edit your task:', taskText);
        if (newTaskText !== null && newTaskText.trim() !== '') {
            tdTask.textContent = newTaskText; // Update the task text
        }
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function() {
        tr.remove(); // Remove the task from the table
        updateTaskNumbers(); // Update task numbers after deletion
    });

    tdAction.appendChild(editBtn);
    tdAction.appendChild(deleteBtn);
    
    tr.appendChild(tdNo);
    tr.appendChild(tdTask);
    tr.appendChild(tdAction);
    
    return tr;
}

function updateTaskNumbers() {
    const taskList = document.getElementById('taskList');
    const tasks = taskList.children;

    for (let i = 0; i < tasks.length; i++) {
        tasks[i].children[0].textContent = i + 1; // Update task number
    }
}
