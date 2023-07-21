// Create a clock container
const clockContainer = document.createElement("div");
clockContainer.style = `
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 20px;
  font-size: 24px;
`;

// Function to update the clock
function updateClock() {
  const now = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  };
  const dateString = now.toLocaleDateString(undefined, options);
  clockContainer.textContent = dateString;
}

// Call updateClock function every second to keep the clock up-to-date
setInterval(updateClock, 1000);

// Initial call to display the clock immediately when the page loads
updateClock();

// Add the clock container to the document body
document.body.appendChild(clockContainer);

