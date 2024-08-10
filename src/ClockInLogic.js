let initialTime = document.getElementById("Clockin-time-el");
let clockOutTime = document.getElementById("Clockout-time-el");

export default function captureClockin() {
  let date = new Date();

  let getTheTime = date.getTime();
  let localTimeString = date.getHours();

  let hours = parseInt(date.getHours());
  let minutes = parseInt(date.getMinutes());

  const time = `${hours}:${minutes}`;

  initialTime.textContent = time;
  //return time;
  console.log("InitialCapture: " + time + typeof time);
}
