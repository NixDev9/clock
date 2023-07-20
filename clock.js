// Function to get the current time in EST
function getCurrentESTTime() {
  const now = new Date();
  const estOffset = -5 * 60; // EST is UTC-5
  const estTime = new Date(now.getTime() + estOffset * 60 * 1000);
  return estTime;
}

// Function to format time in 12-hour format with AM/PM
function formatTime(date) {
  return date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true
  });
}

// Function to format the date
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

// Function to update the clock display
function updateClock() {
  const estTime = getCurrentESTTime();
  const timeElement = document.getElementById("time");
  const ampmElement = document.getElementById("ampm");
  const dateElement = document.getElementById("date");
  const monthElement = document.getElementById("month");
  const yearElement = document.getElementById("year");

  timeElement.textContent = formatTime(estTime);
  ampmElement.textContent = estTime.getHours() >= 12 ? "PM" : "AM";
  dateElement.textContent = formatDate(estTime);
}

// Run the updateClock function every second
setInterval(updateClock, 1000);

  
