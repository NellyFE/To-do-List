const addTask = document.querySelector ("#taskbutton");
const taskInput = document.getElementById("inputlist");
const Addbtn = document.getElementById("add");
const taskForm = document.getElementById("taskform");
const taskContainer = document.getElementById("input-div");

let initialDispaly = "Block";

const placeHolder = "<p class='p-js'>You have no available To-do</p>";

taskContainer.innerHTML = placeHolder;

function addinput() {
  taskInput.style.display = "Block";
  Addbtn.style.display = "Block";
  taskForm.style.display = "Flex";
}

function addTaskToDiv(e) {
  e.preventDefault();

  const task = taskInput.value;

  if (task.trim() !== "") {
    const TaskMessage = document.querySelector(".p-js");
    if (TaskMessage) {
      TaskMessage.remove();
    }

    const taskItem = document.createElement("div");
    taskItem.style.width = "100%";
    taskItem.style.padding = "10px";
    taskItem.innerHTML = `<span style="display: flex; justify-content: space-between; align-items: center; width: "100%";"><p>${task}</p> <button class='delete-btn'>❌</button></span>`;

    taskContainer.appendChild(taskItem);

    taskInput.value = "";

    taskInput.style.display = "none";   
    Addbtn.style.display = "none";
    taskForm.style.display = "none"

    taskItem.querySelector(".delete-btn").addEventListener("click", () => {
      taskItem.remove();
      if (taskContainer.childElementCount < 1) {
        taskContainer.innerHTML = placeHolder;
      }
    });
  }
}

function removEInput(e) {
  e.preventDefault();
  taskInput.style.display = "none";
}

addTask.addEventListener("click", addinput);
Addbtn.addEventListener("click", addTaskToDiv);

taskInput.addEventListener("submit", console.log("ff"));
