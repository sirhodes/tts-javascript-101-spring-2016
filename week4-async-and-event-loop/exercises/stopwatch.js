var timeInSeconds = 0.0;
var frequencyInMilliseconds = 10;
function updateTime() {
  timeInSeconds += (frequencyInMilliseconds / 1000);
  console.log(timeInSeconds);
}

setInterval(updateTime, frequencyInMilliseconds);
