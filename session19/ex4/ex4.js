let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const taskInput = document.getElementById("input-task");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");
const taskCount = document.getElementById("task-count");
const clearAllBtn = document.getElementById("clear-btn");

function deleteItem(i) {
  tasks.splice(i, 1);
  saveTasks();
  render();
}
function clearAllTasks() {
  tasks = [];
  saveTasks();
  render();
}

function updateTaskCount() {
  const count = tasks.length;
  taskCount.innerHTML = `You have ${count} pending tasks.`;
}

function render() {
  taskList.innerHTML = "";
  for (let i in tasks) {
    const div_item = document.createElement("div");
    div_item.className = "div-item";
    taskList.appendChild(div_item);

    const task_item = document.createElement("div");
    task_item.className = "task-item";
    task_item.innerText = tasks[i].todo;
    div_item.appendChild(task_item);

    const delete_btn = document.createElement("button");
    delete_btn.className = "delete-btn";
    delete_btn.innerHTML = '<i class="bi bi-trash-fill"></i>';
    div_item.appendChild(delete_btn);
    delete_btn.addEventListener("click", function () {
      deleteItem(i);
    });
  }
  updateTaskCount();
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
  const text = taskInput.value.trim(); // trim is used to remove whitespace from both ends of a string
  if (text === "") return;

  const task = {
    id: Date.now(), // date.now() generates a unique id based on the current timestamp
    todo: text,
  };

  tasks.push(task);
  taskInput.value = "";
  saveTasks();
  render();
}

// main program
render();
addBtn.addEventListener("click", addTask);
clearAllBtn.addEventListener("click", clearAllTasks);
taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
