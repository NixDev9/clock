function getCurrentESTTime() {
  const now = new Date();
  const estOffset = now.getTimezoneOffset() / 60 - 5; // EST is UTC-5 (during standard time)
  const estTime = new Date(now.getTime() + estOffset * 60 * 60 * 1000);
  return estTime;
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
  const estTime = getCurrentESTTime();
  const timeElement = document.getElementById("time");
  const dateElement = document.getElementById("date");
  const monthElement = document.getElementById("month");
  const yearElement = document.getElementById("year");

  timeElement.textContent = formatTime(estTime);
  dateElement.textContent = formatDate(estTime);
}

function showVisitorLocalTime() {
  const localTime = new Date();
  console.log("Visitor's Local Time:", localTime.toLocaleString());
}

updateClock();
setInterval(updateClock, 1000);

showVisitorLocalTime();
