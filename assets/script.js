
var taskInput = $(".time-block");
var hourHeader = $(".hour");
//converting numberse in miitary time
var hour9am = document.querySelector("#hour9");
var hour10am = document.querySelector("#hour10");
var hour11am = document.querySelector("#hour11");
var hour12pm = document.querySelector("#hour12");
var hour1pm = document.querySelector("#hour13");
var hour2pm = document.querySelector("#hour14");
var hour3pm = document.querySelector("#hour15");
var localTime = moment();

//convert military time into reg 12hr time
function getRegTime(hour) {
  if (hour > 12) {
    return hour -12;
  }
  else {
    return hour;
  }
}

//change colors of each time block depending on past, present, future
function updateHourColor() {
  if(localTime = hour) {
    taskInput.classList.add("present");
  }
  else if(localTime > hourHeader) {
    taskInput.classList.add("future");
  }
  else {
    taskInput.classList.add("past");
  }
};



// console.log(localTime.format("HH"));

//store tasks in local storage
var saveTasks = function() {
  localStorage.setItem("tasks", JSON.stringify(tasksInput));
}


//when saveBtn is clicked, run saveTasks function
$(".saveBtn").ready(saveTasks);



// //display tasks saved in local storage on page
// var loadTasks = function() {
//   tasks = JSON.parse(localStorage.getItem("tasks"));
//   // if nothing in localStorage
//   if (!tasks) {

//   }; 
// }
