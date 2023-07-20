
function getCurrentTimeInTimeZone(timezone) {
  const now = new Date();
  const options = { timeZone: timezone, hour12: true, hour: "numeric", minute: "numeric", second: "numeric" };
  return now.toLocaleString([], options);
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

  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const localTimeString = getCurrentTimeInTimeZone(timezone);
  timeElement.textContent = localTimeString;
  dateElement.textContent = formatDate(localTime);
}

function applyStyles() {
  document.body.style.backgroundColor = "white";
  const clockContainers = document.getElementsByClassName("clock-container");
  for (let i = 0; i < clockContainers.length; i++) {
    const clockContainer = clockContainers[i];
    clockContainer.style.border = "none";
    clockContainer.style.borderRadius = "8px";
  }
}

// Call applyStyles to set the styles on page load
applyStyles();

// Call updateClock to display the time on page load
updateClock();

// Run the updateClock function every second
setInterval(updateClock, 1000);
