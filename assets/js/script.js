$(function () {
  let date = moment();
  var dateToday = $("#currentDay");
  dateToday.text(date.format('ddd MMM Do YYYY'));
});