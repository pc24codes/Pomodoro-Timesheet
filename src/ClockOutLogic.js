let initialTime = document.getElementById("Clockin-time-el");
let clockOutTime = document.getElementById("Clockout-time-el");

export default function captureClockout() {
  let d2 = new Date();
  let getTheTime = d2.getTime();
  let localTimeString = d2.getHours();

  let hours2 = parseInt(d2.getHours());
  let minutes2 = parseInt(d2.getMinutes());

  const time = `${hours2}:${minutes2}`;

  //return time;
  console.log("ClockOutCapture: " + time + typeof time);
  clockOutTime.textContent = time;
}
