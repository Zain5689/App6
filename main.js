/*
  Students Tasks:
  [1] Use Sweet Alert If Input Is Empty
  [2] Check If Task Is Exist
  [3] Create Delete All Tasks Button
  [4] Create Finish All Tasks Button
  [5] Add To Tasks To The Local Storage
*/

let TheInput = document.querySelector(".add-task input");
let btn = document.querySelector(".add-task .plus");
let taskContainer = document.querySelector(".task-content");
let taskCount = document.querySelector(".task-count span");
let taskComplete = document.querySelector(".task-complete span");
let removeAll = document.querySelector(".buto .deletes");
let finisheAll = document.querySelector(".buto .finshes");

window.onload = function () {
  TheInput.focus();
};
// Adding The Task

btn.onclick = function () {
  // if Input is Empty
  if (TheInput.value === "") {
    console.log("No Value");
  } else {
    let noTaskMsg = document.querySelector(".no-task-message");

    //Chech No Task
    if (document.body.contains(document.querySelector(".no-task-message"))) {
      //Remove Text
      noTaskMsg.remove();
    }

    // Create Main Span
    let mainSpan = document.createElement("span");

    //Create  Span Text
    let spanText = document.createTextNode(TheInput.value);

    //Create Delete Button
    let deleteButton = document.createElement("span");

    //Create  Delete Button Text
    let buttonText = document.createTextNode("delete");

    //Add text to Main span
    mainSpan.appendChild(spanText);

    // Add Class To Main Span
    mainSpan.className = "task-box";

    //Add text to Delete Button
    deleteButton.appendChild(buttonText);

    //Add Class name to Delete Button
    deleteButton.className = "delete";

    // Add Delete Button to Main span
    mainSpan.appendChild(deleteButton);

    // Add Main span to task Container
    taskContainer.appendChild(mainSpan);

    //Remove All Task
    removeAll.addEventListener("click", function () {
      mainSpan.remove();
    });

    //finish All Task
    finisheAll.addEventListener("click", function () {
      mainSpan.classList.toggle("finished");
    });

    // Empty The Input
    TheInput.value = "";

    // Focus On Field
    TheInput.focus();

    //calc
    CalculateTasks();
  }
};

document.addEventListener("click", function (e) {
  // Delete Task
  if (e.target.className == "delete") {
    // Remove Current Task
    e.target.parentNode.remove();
  }

  // Check Number Of Tasks Inside The Container
  if (taskContainer.childElementCount == 0) {
    // Add Createspan function
    Createspan();
  }

  // Finish Task
  // Finish Task
  if (e.target.classList.contains("task-box")) {
    // Toggle Class 'finished'
    e.target.classList.toggle("finished");
  }
  //calc
  CalculateTasks();
});

// Create Span
function Createspan() {
  // Create Span
  let span = document.createElement("span");

  // Create Span Text
  let spanText = document.createTextNode("No Tasks To Show");

  // Add text to span
  span.appendChild(spanText);

  //Add class To span
  span.className = "no-task-message";

  //Add span to contain
  taskContainer.appendChild(span);
}

// Function To Calculate Tasks
function CalculateTasks() {
  taskCount.innerHTML = document.querySelectorAll(
    ".task-content .task-box"
  ).length;
  taskComplete.innerHTML = document.querySelectorAll(
    ".task-content .finished"
  ).length;
}
