const tasks = [];
let taskId = 0;

document.getElementById("task-form").addEventListener("submit", function (e) {
    e.preventDefault();
    addTask();
});

document.getElementById("clear-btn").addEventListener("click", clearAllTasks);

function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();
    
    if (taskText === "") return;

    const taskObj = { task_id: taskId++, text: taskText, done: false };
    tasks.push(taskObj);
    renderTask(taskObj);
    
    taskInput.value = "";
}

function renderTask(taskObj) {
    const list = document.querySelector(".listTasks");

    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    taskDiv.setAttribute("data-task-id", taskObj.task_id);

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", () => doneTask(taskObj.task_id));

    const taskText = document.createElement("span");
    taskText.textContent = taskObj.text;

    const deleteBtn = document.createElement("i");
    deleteBtn.classList.add("fas", "fa-times", "delete-btn");
    deleteBtn.addEventListener("click", () => deleteTask(taskObj.task_id));

    taskDiv.append(checkbox, taskText, deleteBtn);
    list.appendChild(taskDiv);
}

function doneTask(id) {
    const task = tasks.find(t => t.task_id === id);
    if (task) {
        task.done = !task.done;
        document.querySelector(`[data-task-id="${id}"] span`).classList.toggle("done", task.done);
    }
}

function deleteTask(id) {
    const index = tasks.findIndex(t => t.task_id === id);
    if (index !== -1) {
        tasks.splice(index, 1);
        document.querySelector(`[data-task-id="${id}"]`).remove();
    }
}

function clearAllTasks() {
    tasks.length = 0;
    document.querySelector(".listTasks").innerHTML = "";
}
