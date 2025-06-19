function isTimeString(value) {  
const timePattern = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;  
return timePattern.test(value);  
}  
console.log(isTimeString('16:30'));  
console.log(isTimeString('4:30 PM')); 
