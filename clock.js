// Function to create the clock container
function createClock() {
  const clockContainer = document.createElement("div");
  clockContainer.className = "clock-container";
  clockContainer.style.fontFamily = "Arial, sans-serif";
  clockContainer.style.display = "flex";
  clockContainer.style.justifyContent = "space-between"; // Align items to the ends
  clockContainer.style.alignItems = "center";
  clockContainer.style.backgroundColor = "white";
  clockContainer.style.padding = "20px";
  clockContainer.style.borderRadius = "8px"; // Set border-radius to 8px
  document.body.appendChild(clockContainer);

  const dateElement = document.createElement("div");
  dateElement.className = "date-container";
  dateElement.style.fontSize = "24px";
  clockContainer.appendChild(dateElement);

  const timeElement = document.createElement("div");
  timeElement.className = "time-container";
  timeElement.style.fontSize = "36px";
  clockContainer.appendChild(timeElement);

  return { dateElement, timeElement };
}

// Function to update the clock with the current time
function updateClock(dateElement, timeElement) {
  const localTime = new Date();
  const timeString = localTime.toLocaleString([], { hour: "numeric", minute: "numeric", second: "numeric", hour12: true });
  timeElement.textContent = timeString;

  const dateString = localTime.toLocaleString([], { day: "numeric", month: "long", year: "numeric" });
  dateElement.textContent = dateString;
}

function applyStyles() {
  document.body.style.backgroundColor = "white";
}

applyStyles();

const { dateElement, timeElement } = createClock();
updateClock(dateElement, timeElement);
setInterval(() => updateClock(dateElement, timeElement), 1000);
