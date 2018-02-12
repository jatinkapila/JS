function convertToCentigrade(degFahren) {
  var degCent = 5 / 9 *(degFahren-32);
  return degCent;
}
myTemp = convertToCentigrade(212);
console.log(myTemp + " Here is the Temp in Centigrades !");


let today = prompt("enter the day")
let sleepHours = prompt("how many hours u sleep in night !");
const getSleepHours = (today) => {
  if (today === 'Monday')
  return sleepHours;

  else if (today === 'Tuesday')
  return sleepHours;
  else if (today === 'Wednesday')
  return sleepHours;
  else if (today === 'Thursday')
  return sleepHours;
  else if (today === 'Friday')
  return sleepHours;
  else if (today === 'Saturday')
  return sleepHours;
  else if (today === 'Sunday')
  return sleepHours;

}

document.write(getSleepHours(today));


const getActualSleepHours = () => {
  return getSleepHours(today);
}

const getIdealSleepHours = () => {
  let idealHours = 7;
  return idealHours;
}

const calculateSleepDebt = () => {
let actualSleepHours = getActualSleepHours();
 let idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
  document.write('user got the perfect amount of sleep.');
}
  else if (actualSleepHours < idealSleepHours) {
  document.write('user should get some rest.');
}
  else if (actualSleepHours > idealSleepHours) {
  document.write('user got more sleep than needed.');
}
 if (actualSleepHours < idealSleepHours) {
  document.write('You got ' + (idealSleepHours - actualSleepHours) + ' hours less sleep than you needed this week. Get some rest.');
}

}
document.write(calculateSleepDebt());
