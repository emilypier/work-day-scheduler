
// var taskInput = document.querySelector(".time-block");
var hourHeader = document.querySelector(".hour");

var localTime = moment();
  console.log(localTime.format("HH"));

// //find out what time it is
// var currentHour = function() {
//   moment();
//   //format in military time
//   moment().format(kk);
//   console.log(currentHour);
// }

// //when saveBtn is clicked
// $(".saveBtn").function() {
//   //store tasks in local storage
//   var saveTasks = function() {
//   localStorage.setItem("tasks", JSON.stringify(tasks));
//   }
// };


// //display tasks saved in local storage on page
// var loadTasks = function() {
//   tasks = JSON.parse(localStorage.getItem("tasks"));
//   // if nothing in localStorage
//   if (!tasks) {

//   }; 
// }

// //change colors of each time block depending on past, present, future
// var currentHour = function() {
//   moment().format('LT'); //today at current time
//   console.log('LT');
// };

var changeColor = function() {
  if(localTime = hourHeader) {
  taskInput.classList.add("present");
  console.log("present");
  }
  else if(localTime > hourHeader) {
    taskInput.classList.add("future");
    console.log("future");
  }
  else {
    taskInput.classList.add("past");
    console.log("past");
  }
};

// //change time to military time
// moment("16", "hh").format('hA')
// console.log("")

// currentDate.setDate