function addTask() {
    const taskInput = document.getElementById("taskInput");
    const dateInput = document.getElementById("dateInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        const li = document.createElement("li");
        
        const taskText = taskInput.value;
        const dueDate = dateInput.value ? new Date(dateInput.value).toLocaleString() : "No due date";

        li.innerHTML = `
            <div class="task-details">
                <span class="task-text" onclick="toggleTask(this)">${taskText}</span>
                <span class="task-date">${dueDate}</span>
            </div>
            <button class="edit-button" onclick="editTask(this)">Edit</button>
            <button onclick="removeTask(this)">Delete</button>
        `;

        taskList.appendChild(li);
        
        taskInput.value = "";
        dateInput.value = "";
    }
}

function toggleTask(taskElement) {
    taskElement.parentNode.parentNode.classList.toggle("completed");
}

function removeTask(taskElement) {
    const li = taskElement.parentNode;
    li.parentNode.removeChild(li);
}

function editTask(editButton) {
    const taskItem = editButton.parentNode;
    const taskTextElement = taskItem.querySelector(".task-text");
    const taskDateElement = taskItem.querySelector(".task-date");

    const currentTask = taskTextElement.innerText;
    const currentDate = taskDateElement.innerText !== "No due date" ? new Date(taskDateElement.innerText) : null;

    const newTask = prompt("Edit Task:", currentTask);
    const newDate = prompt("Edit Due Date (YYYY-MM-DDTHH:MM):", currentDate ? currentDate.toISOString().slice(0, 16) : "");

    if (newTask !== null && newTask.trim() !== "") {
        taskTextElement.innerText = newTask;
    }
    if (newDate) {
        taskDateElement.innerText = new Date(newDate).toLocaleString();
    } else {
        taskDateElement.innerText = "No due date";
    }
}
