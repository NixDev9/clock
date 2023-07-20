const clockContainer = document.createElement("div");
clockContainer.className = "clock-container";

const dateContainer = document.createElement("div");
dateContainer.className = "date-container";

const timeContainer = document.createElement("div");
timeContainer.className = "time-container";

document.body.appendChild(clockContainer);
clockContainer.appendChild(dateContainer);
clockContainer.appendChild(timeContainer);

function getCurrentETTime() {
  const now = new Date();
  const etOffset = now.getTimezoneOffset() / 60 - 4; // ET is UTC-4 (during daylight saving time)
  const etTime = new Date(now.getTime() + etOffset * 60 * 60 * 1000);
  return etTime;
}

function formatTime(date) {
  return date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true
  });
}

function formatDate(date) {
  const months = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
  ];

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}

function updateClock() {
  const etTime = getCurrentETTime();
  const timeElement = document.getElementById("time");
  const dateElement = document.getElementById("date");
  const monthElement = document.getElementById("month");
  const yearElement = document.getElementById("year");

  timeElement.textContent = formatTime(etTime);
  dateElement.textContent = formatDate(etTime);
}

updateClock();
setInterval(updateClock, 1000);


