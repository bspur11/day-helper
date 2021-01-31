$(function () {
  let date = moment();
  var dateToday = $("#currentDay");
  dateToday.text(date.format('dddd MMMM Do YYYY'));
  let nowTime = $('#timeNow');
  nowTime.text(date.format('hh mm a'));


  $(document).ready(function () {
    // saveBtn click listener 
    $(".saveBtn").on("click", function () {
      // Get nearby values of the description in JQuery
      var text = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");

      // Save text in local storage
      localStorage.setItem(time, text);
    })

    function timeTracker() {
      //get current number of hours.
      var timeNow = moment().hour();

      // loop over time blocks
      $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("id").split("hour")[1]);

        // To check the time and add the classes for background indicators
        if (blockTime < timeNow) {
          $(this).removeClass("future");
          $(this).removeClass("present");
          $(this).addClass("past");
        } else if (blockTime === timeNow) {
          $(this).removeClass("past");
          $(this).removeClass("future");
          $(this).addClass("present");
        } else {
          $(this).removeClass("present");
          $(this).removeClass("past");
          $(this).addClass("future");

        }
      })
    }


    // Get item from local storage if there is any
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    timeTracker();
  })

})






// );

// $(function () {
//   let date = moment();
//   var dateToday = $("#currentDay");
//   dateToday.text(date.format('dddd MMMM Do YYYY'));

//   let timebloks = $('#timeblocks');
//   let masterRow = $('#day-row');
//   let hourStamp = $('#day-row');
//   let taskEl = $('#timeblocks');
//   hourStamp.children('.hourname').text('8:00 AM');
//   // masterRow.children('.hourname').text('12:00 AM');

//    // js to clone a div for a loop

//     // for (i = 0; i < 9; i++) {
//     // let newRow = masterRow.clone();
//     // timebloks.append(newRow);
//     for (i = 0; i <= 9; i++) {
//       let newStamp = hourStamp.clone();
//       taskEl.append(newStamp);
//     }

//   }