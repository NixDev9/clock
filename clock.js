// Function to create the clock container
function createClock() {
  const clockContainer = document.createElement("div");
  clockContainer.className = "clock-container";
  clockContainer.style.fontFamily = "Arial, sans-serif";
  clockContainer.style.display = "flex";
  clockContainer.style.flexDirection = "column";
  clockContainer.style.alignItems = "center";
  clockContainer.style.backgroundColor = "white";
  clockContainer.style.padding = "20px";
  clockContainer.style.borderRadius = "0"; // Set border-radius to 0
  document.body.appendChild(clockContainer);

  return clockContainer;
}

// Function to update the clock with the current time
function updateClock(clockContainer) {
  const localTime = new Date();
  const timeElement = document.createElement("div");
  timeElement.className = "time-container";
  timeElement.style.fontSize = "36px";
  const timeString = localTime.toLocaleString([], { hour: "numeric", minute: "numeric", second: "numeric", hour12: true });
  timeElement.textContent = timeString;

  const dateElement = document.createElement("div");
  dateElement.className = "date-container";
  dateElement.style.fontSize = "24px";
  const dateString = localTime.toLocaleString([], { day: "numeric", month: "long", year: "numeric" });
  dateElement.textContent = dateString;

  clockContainer.innerHTML = ""; // Clear the container
  clockContainer.appendChild(dateElement);
  clockContainer.appendChild(timeElement);
}

function applyStyles() {
  document.body.style.backgroundColor = "white";
}

applyStyles();

const clockContainer = createClock();
updateClock(clockContainer);
setInterval(() => updateClock(clockContainer), 1000);

