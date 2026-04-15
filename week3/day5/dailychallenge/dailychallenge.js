// Part I: Initialize empty tasks array
const tasks = [];

const form = document.getElementById("todoForm");
const listDiv = document.querySelector(".listTasks");

// Listen for the form submission
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Stop page from refreshing
    addTask();
});

function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value;

    // Check if input is empty
    if (taskText.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    // Bonus I: Create task object
    const taskObj = {
        task_id: tasks.length,
        text: taskText,
        done: false
    };

    tasks.push(taskObj);
    renderTask(taskObj);
    
    input.value = ""; // Clear input field
}

function renderTask(task) {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task-item");
    taskDiv.setAttribute("data-task-id", task.task_id);

    // Bonus II: Create Delete "X" button
    const deleteBtn = document.createElement("i");
    deleteBtn.classList.add("fa-solid", "fa-xmark");
    deleteBtn.addEventListener("click", () => deleteTask(task.task_id));

    // Create Checkbox
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("id", "task-" + task.task_id);
    checkbox.addEventListener("change", () => doneTask(task.task_id, taskDiv));

    // Create Label
    const label = document.createElement("label");
    label.setAttribute("for", "task-" + task.task_id);
    label.innerText = task.text;

    // Add everything to the task div
    taskDiv.appendChild(deleteBtn);
    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(label);

    // Add task div to the list in the DOM
    listDiv.appendChild(taskDiv);
}

// Bonus I: Function to toggle task status
function doneTask(id, element) {
    const task = tasks.find(t => t.task_id === id);
    if (task) {
        task.done = !task.done; // Flip the true/false
        element.classList.toggle("is-done");
    }
}

// Bonus II: Function to delete task
function deleteTask(id) {
    // Remove from DOM
    const element = document.querySelector(`[data-task-id='${id}']`);
    if (element) element.remove();

    // Remove from Array
    const index = tasks.findIndex(t => t.task_id === id);
    if (index > -1) tasks.splice(index, 1);
}

// Explanation:
// 1. Array of Objects: Each task is an object to keep data organized.
// 2. data-task-id: This attribute links the HTML on screen to the object in JS.
// 3. Event Listeners: These "watch" for clicks or changes to trigger functions.