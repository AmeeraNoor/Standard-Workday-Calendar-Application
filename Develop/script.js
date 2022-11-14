
$(function () {
 
  var now = dayjs()
  var currentDay = document.getElementById('currentDay')
  currentDay.innerHTML = now.format('dddd DD/MM/YYYY h:mmA')

  var timeslots = document.getElementById('timeslots').querySelectorAll('.row')

  for (var i = 0; i < timeslots.length; i++) {
    var button = timeslots[i].querySelector('button')
    button.addEventListener('click', saveEvent) 
});
