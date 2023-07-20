const createClock = () => {
  const clockContainer = document.createElement("div");
  clockContainer.className = "clock-container";
  clockContainer.style.fontFamily = "Arial, sans-serif";
  clockContainer.style.display = "flex";
  clockContainer.style.flexDirection = "column";
  clockContainer.style.alignItems = "center";
  clockContainer.style.backgroundColor = "white";
  clockContainer.style.padding = "20px";
  clockContainer.style.borderRadius = "8px";

  const dateContainer = document.createElement("div");
  dateContainer.className = "date-container";
  dateContainer.style.fontSize = "24px";
  dateContainer.style.marginBottom = "10px";

  const timeContainer = document.createElement("div");
  timeContainer.className = "time-container";
  timeContainer.style.fontSize = "36px";

  clockContainer.appendChild(dateContainer);
  clockContainer.appendChild(timeContainer);
  document.body.appendChild(clockContainer);

  return { dateContainer, timeContainer };
};

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

function updateClock(dateContainer, timeContainer) {
  const localTime = new Date();

  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const localTimeString = getCurrentTimeInTimeZone(timezone);

  timeContainer.textContent = localTimeString;
  dateContainer.textContent = formatDate(localTime);
}

function applyStyles() {
  document.body.style.backgroundColor = "white";
}

applyStyles();

const { dateContainer, timeContainer } = createClock();
updateClock(dateContainer, timeContainer);
setInterval(() => updateClock(dateContainer, timeContainer), 1000);
