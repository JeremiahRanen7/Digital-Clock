function clock() {
  const now = new Date();

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const ampm = hours >= 12 ? "pm" : "am";
  /*to check whether the program is running*/
  console.log(hours)
  console.log(minutes)
  console.log(seconds)
  console.log(ampm)
  
  const formattedHours = String(hours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");
  const formattedAmPm = String(ampm).toUpperCase();

  //padding extra chars at begin

  const timeStr = `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${formattedAmPm}`;

  document.getElementById("container").innerText = timeStr;
}

setInterval(clock);
