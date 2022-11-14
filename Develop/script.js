
$(function () {
 
  var now = dayjs()
  var currentDay = document.getElementById('currentDay')
  currentDay.innerHTML = now.format('dddd MM/DD/YYYY HH:mmA')

  var timeslots = document.getElementById('timeslots').querySelectorAll('.row')

  for (var i = 0; i < timeslots.length; i++) {
    var button = timeslots[i].querySelector('button')
    button.addEventListener('click', saveEvent) 

    var taskId = button.closest(".row").id
    const task = JSON.parse(localStorage.getItem(taskId)) || []
    document.getElementById(taskId).querySelector('textarea').value = task

    var currentHour = now.hour()
    var taskHour = parseInt(taskId.substring(5))

    if (currentHour - taskHour == 0) {
      document.getElementById(taskId).classList.add('present')
    } else if (currentHour - taskHour > 0) {
      document.getElementById(taskId).classList.add('past')
    } else if (currentHour - taskHour < 0) {
      document.getElementById(taskId).classList.add('future')
    }
  }
  function saveEvent(e) {
    var taskId = e.target.closest(".row").id
    var taskContent = document.getElementById(taskId).querySelector('textarea').value
    localStorage.setItem(taskId, JSON.stringify(taskContent))
  }
});
