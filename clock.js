function getCurrentTimeInTimeZone(timezone) {
  const now = new Date();
  const options = { timeZone: timezone, hour12: true, hour: "numeric", minute: "numeric", second: "numeric" };
  return now.toLocaleString([], options);
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
  const localTime = new Date();
  const timeElement = document.getElementById("time");
  const dateElement = document.getElementById("date");
  const monthElement = document.getElementById("month");
  const yearElement = document.getElementById("year");

  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const localTimeString = getCurrentTimeInTimeZone(timezone);
  timeElement.textContent = localTimeString;
  dateElement.textContent = formatDate(localTime);
}

updateClock();
setInterval(updateClock, 1000);
