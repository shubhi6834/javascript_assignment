const today = new Date();
const currentYear = today.getFullYear();
const nextChristmas = new Date(currentYear, 11, 25); 
if (today > nextChristmas) {
  nextChristmas.setFullYear(currentYear + 1); 
const oneDay = 24 * 60 * 60 * 1000; 
const daysLeft = Math.ceil((nextChristmas - today) / oneDay);
console.log('There are ${daysLeft} days left until next Christmas.')
