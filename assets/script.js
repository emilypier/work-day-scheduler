
$('#currentDay').text(moment().format('dddd, MMMM Do'));


//change colors of each time block depending on past, present, future
function updateHourColor() {
  var currentHour = moment().hours();

  $('.time-block').each(function(){
    var rowHour = parseInt($(this).attr('id'));

    if(rowHour < currentHour){
      $(this).addClass('past');
    }else if(rowHour === currentHour){
      $(this).removeClass('past');
      $(this).addClass('present');
    }else{
      $(this).removeClass('past');
      $(this).removeClass('present');
      $(this).addClass('future');
    }

  })
};

updateHourColor()
//store tasks in local storage
var saveTasks = function() {
  var key = $(this).parent().attr('id');
  var value = $(this).siblings('.description').val();

  localStorage.setItem(key, value);
}

//when saveBtn is clicked, run saveTasks function
$(".saveBtn").on('click', saveTasks);

//display tasks saved in local storage on page
$('#8 .description').val(localStorage.getItem("8"));
$('#9 .description').val(localStorage.getItem("9"));
$('#10 .description').val(localStorage.getItem("10"));
$('#11 .description').val(localStorage.getItem("11"));
$('#12 .description').val(localStorage.getItem("12"));
$('#13 .description').val(localStorage.getItem("13"));
$('#14 .description').val(localStorage.getItem("14"));
$('#15 .description').val(localStorage.getItem("15"));
$('#16 .description').val(localStorage.getItem("16"));
$('#17 .description').val(localStorage.getItem("17"));