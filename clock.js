function getCurrentESTTime() {
    // Get the current UTC time
    const now = new Date();
  
    // Calculate the offset in minutes for EST (UTC-5)
    const estOffset = -5 * 60;
    
    // Calculate the local time in EST
    const estTime = new Date(now.getTime() + estOffset * 60 * 1000);
  
    return estTime;
  }
  
  function formatTime(date) {
    return date.toISOString().substr(11, 8);
  }
  
  function formatDate(date) {
    const months = [
      "January", "February", "March", "April",
      "May", "June", "July", "August",
      "September", "October", "November", "December"
    ];
    
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    
    return `${month} ${day}, ${year}`;
  }
  
  function updateClock() {
    const estTime = getCurrentESTTime();
    const timeElement = document.getElementById("time");
    const dateElement = document.getElementById("date");
    
    timeElement.textContent = formatTime(estTime);
    dateElement.textContent = formatDate(estTime);
  }
  
  // Run the updateClock function every second
  setInterval(updateClock, 1000);
  