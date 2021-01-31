$(document).ready(function () {
      // saveBtn click listener 
      $(".saveBtn").on("click", function () {
        // Get nearby values of the description in JQuery
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save text in local storage
        localStorage.setItem(time, text);
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