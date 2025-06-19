function isUKPostCode(value) {  
const ukPostPattern = /^[A-Z]{1,2}\d{1,2}[A-Z]?\s?\d[A-Z]{2}$/i;  
return ukPostPattern.test(value);  
}  
console.log(isUKPostCode('DP1A 1AB'));  
console.log(isUKPostCode('12345'));   
