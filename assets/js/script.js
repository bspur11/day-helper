$(function () {
  let date = moment();
  var dateToday = $("#currentDay");
  dateToday.text(date.format('dddd MMMM Do YYYY'));

  let timebloks = $('#timeblocks');
  let masterRow = $('#day-row');
  masterRow.children('.hourname').text('12:00 AM');

  // js to clone a div for a loop

  for (i = 0; i < 5; i++) {
    let newRow = masterRow.clone();
    timebloks.append(newRow);
  }

});