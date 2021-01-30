$(function () {
  let date = moment();
  var dateToday = $("#currentDay");
  dateToday.text(date.format('ddd MMM Do YYYY'));

  let timebloks = $('#timeblocks');
  let masterRow = $('#day-row');
  masterRow.children('.hourname').text('12:00 AM');

  let newRow = masterRow.clone();
  timebloks.append(newRow);

});