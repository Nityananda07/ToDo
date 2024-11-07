let taskCount = 0;

document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    taskCount++;
    const tr = createTaskElement(taskCount, taskText);
    document.getElementById('taskList').appendChild(tr);
    taskInput.value = '';
});

function createTaskElement(taskNo, taskText) {
    const tr = document.createElement('tr');

    const tdNo = document.createElement('td');
    tdNo.textContent = taskNo; 

    const tdTask = document.createElement('td');
    tdTask.textContent = taskText; 

    const tdAction = document.createElement('td');

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', function() {
        console.log(`Editing task: ${taskText}`); 
        const newTaskText = prompt('Edit your task:', taskText);
        if (newTaskText !== null && newTaskText.trim() !== '') {
            tdTask.textContent = newTaskText; 
            console.log(`Task updated to: ${newTaskText}`); 
        }
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function() {
        tr.remove(); 
    });

    tdAction.appendChild(editBtn);
    tdAction.appendChild(deleteBtn);
    
    tr.appendChild(tdNo);
    tr.appendChild(tdTask);
    tr.appendChild(tdAction);
    
    return tr;
}