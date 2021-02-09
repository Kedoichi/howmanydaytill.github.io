const dayCD = document.getElementById("days");
const hourCD = document.getElementById("hours");
const minCD = document.getElementById("mins");
const secCD = document.getElementById("secs");

function countdown() {
  const newYearDate = new Date(getdate());
  const currentDate = new Date();

  const totalSec = (newYearDate - currentDate) / 1000;
  const day = Math.floor(totalSec / 3600 / 24);
  const hour = Math.floor(totalSec / 3600) % 24;
  const min = Math.floor(totalSec / 60) % 60;
  const sec = Math.floor(totalSec) % 60;

  dayCD.innerHTML = formatTime(day);
  hourCD.innerHTML = formatTime(hour);
  minCD.innerHTML = formatTime(min);
  secCD.innerHTML = formatTime(sec);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
function getdate() {
  var date = document.getElementById("myDate").value,
    time = document.getElementById("myTime").value;
  return new Date(date + " " + time);
}
function mainFunction() {
  const newYearDate = new Date(getdate());
  const currentDate = new Date();

  if ((newYearDate - currentDate) / 1000 < 0) {
    document.getElementById("msg").innerHTML = "Try another day mate";
  } else {
    countdown();
    setInterval(countdown, 1000);
    document.getElementById("msg").innerHTML = "UwU";
  }
}

