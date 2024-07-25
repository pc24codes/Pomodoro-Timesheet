let initialTime = document.getElementById("Clockin-time-el");
let clockOutTime = document.getElementById("Clockout-time-el");

export default function captureClockin() {
  let d = new Date();

  let getTheTime = d.getTime();
  let localTimeString = d.getHours();

  let hours = parseInt(d.getHours());
  let minutes = parseInt(d.getMinutes());

  const time = `${hours}:${minutes}`;

  initialTime.textContent = time;
  //return time;
  console.log("InitialCapture: " + time + typeof time);
}
