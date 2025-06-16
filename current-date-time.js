const current = new Date();
const dayList = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
console.log("Today is: " + dayList[current.getDay()]);
console.log("Current time is: " + current.toLocaleTimeString());
