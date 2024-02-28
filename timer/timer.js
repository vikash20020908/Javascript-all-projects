let timer;
let minutes = 0;
let seconds = 0;

function startTimer() {
  timer = setInterval(updateTimer, 1000);
}

function stopTimer() {
  clearInterval(timer);
}

function updateTimer() {
  seconds++;

  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }

  const formattedMinutes = padTime(minutes);
  const formattedSeconds = padTime(seconds);

  document.getElementById('minutes').innerText = formattedMinutes;
  document.getElementById('seconds').innerText = formattedSeconds;
}

function padTime(time) {
  return time < 10 ? `0${time}` : time;
}
