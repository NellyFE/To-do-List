// const addTask = document.getElementById("taskbutton");
// const taskInput = document.getElementById("inputlist");
// const Addbtn = document.getElementById("add");
// const taskForm = document.getElementById("taskform");
// const taskContainer = document.getElementById("input-div");

// const placeHolder = "<p class='p-js'> You have no availabe to do";

// taskContainer.innerHTML = placeHolder;

// function addinput() {
//   taskInput.style.display = "block";
//   taskForm.style.display = "block";
//   Addbtn.style.display = "block";
// }

// addTask.addEventListener("click", addinput);

// function addTaskToDiv(e) {
//   e.preventDefault();

//   const task = taskInput.value.trim();

//   if (task !== " ") {
//     const TaskMessage = document.querySelector("p-js");
//     if (TaskMessage) {
//       TaskMessage.remove();
//     }
//   }

//    const taskItem = document.createElement("div");
//        taskItem.style.width = "100%";
//     taskItem.style.padding = "10px";
//     taskItem.innerHTML = `<span style="display: flex; justify-content: space-between; align-items: center; width: "100%";"><p>${task}</p> <button class='delete-btn'>❌</button></span>`;

// taskContainer.appendChild(taskItem);

// } !== not equal to / === equal to

// Addbtn.addEventListener('click' , addTaskToDiv);

const addTask = document.querySelector("#taskbutton");
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
    taskItem.innerHTML = `<span style="display: flex; justify-content: space-between; align-items: center; width: "100%";"><p class = 'check-text' > <input type = 'checkbox' id = 'checkbox'> ${task}</p> <button class='delete-btn'>❌</button></span>`;

    taskContainer.appendChild(taskItem);

    const checkBox = taskItem.querySelector("#checkbox");
    const TaskText = taskItem.querySelector(".~check-text");

    function check(e) {
      console.log(e);
      e.target.checked
        ? (TaskText.style.textDecoration = "line-through")
        : (TaskText.style.textDecoration = "none");
    }

    checkBox.addEventListener("click", check);

    taskInput.value = "";

    taskInput.style.display = "none";
    Addbtn.style.display = "none";
    taskForm.style.display = "none";

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
