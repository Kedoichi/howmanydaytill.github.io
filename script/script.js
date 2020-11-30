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

  console.log(day, hour, min, sec);

  dayCD.innerHTML = formatTime(day);
  hourCD.innerHTML = formatTime(hour);
  minCD.innerHTML = formatTime(min);
  secCD.innerHTML = formatTime(sec);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
function getdate() {
  return document.getElementById("myDate").value;
}
function myFunction() {
  const newYearDate = new Date(getdate());
  const currentDate = new Date();

  if ((newYearDate - currentDate) / 1000 < 0) {
    document.getElementById("msg").innerHTML = "Try another day mate";
  } else {
    countdown();
    setInterval(countdown, 1000)
    document.getElementById("msg").innerHTML = "UwU";
  }
}
function setvalue() {
  document.getElementById("demo").innerHTML = Date() + 1;
}
setvalue();
