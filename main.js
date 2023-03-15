const countDownDate = new Date("May 10, 2023 17:00:00").getTime();

const countDown = setInterval(function () {

  const currentDate = new Date().getTime();
  let timeleft = countDownDate - currentDate;

  let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days + "d"
  document.getElementById("hours").textContent = hours + "h"
  document.getElementById("mins").textContent = minutes + "m"
  document.getElementById("secs").textContent = seconds + "s"

  if (timeleft < 0) {
    clearInterval(countDown);
    const timer = document.getElementById("timer");
    const timerEnd = document.createElement("h2");
    timer.replaceChildren();
    timer.appendChild(timerEnd)
    timerEnd.textContent = "Timer has ended"
  }
}, 1000);