function updateClock() {
  const currentDate = new Date();

  // Get elements to display date and time
  const dateElement = document.getElementById("date");
  const timeElement = document.getElementById("time");

  // Get visitor's local time
  const localTime = currentDate.toLocaleTimeString();
  timeElement.innerText = `Local Time: ${localTime}`;

  // Get visitor's local date
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const localDate = currentDate.toLocaleDateString(undefined, options);
  dateElement.innerText = `Local Date: ${localDate}`;

  // Get visitor's timezone abbreviation
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  timeElement.innerText += ` ${timezone}`;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display the clock immediately when the script loads
updateClock();


