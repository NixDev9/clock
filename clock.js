// Function to get the current time in EST
function getCurrentESTTime() {
  const now = new Date();
  const estOffset = -5 * 60; // EST is UTC-5
  return new Date(now.getTime() + estOffset * 60 * 1000);
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

// Function to get the local time for the visitor based on their time zone
function getVisitorLocalTime(timeZoneOffset) {
  const now = new Date();
  const localOffset = now.getTimezoneOffset();
  const visitorTimeOffset = localOffset + timeZoneOffset;
  return new Date(now.getTime() + visitorTimeOffset * 60 * 1000);
}

// Function to update the clock display
function updateClock() {
  // EST time
  const estTime = getCurrentESTTime();
  const timeElement = document.getElementById("time");
  const ampmElement = document.getElementById("ampm");
  const dateElement = document.getElementById("date");

  timeElement.textContent = formatTime(estTime);
  ampmElement.textContent = estTime.getHours() >= 12 ? "PM" : "AM";
  dateElement.textContent = formatDate(estTime);

  // Visitor's time
  const visitorTimeZoneOffset = new Date().getTimezoneOffset();
  const visitorLocalTime = getVisitorLocalTime(visitorTimeZoneOffset);
  const visitorTimeElement = document.getElementById("visitorTime");

  visitorTimeElement.textContent = formatTime(visitorLocalTime) + " " + getShortTimeZoneAbbreviation(visitorTimeZoneOffset);
}

// Function to get short timezone abbreviation
function getShortTimeZoneAbbreviation(timeZoneOffset) {
  const offsetHours = Math.abs(Math.floor(timeZoneOffset / 60));
  const offsetMinutes = Math.abs(timeZoneOffset % 60);
  const sign = timeZoneOffset > 0 ? "-" : "+";
  return `GMT ${sign}${offsetHours}:${offsetMinutes}`;
}

// Run the updateClock function every second
setInterval(updateClock, 1000);
