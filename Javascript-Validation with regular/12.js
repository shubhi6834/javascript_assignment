function isUSZipCode(value) {  
const usZipPattern = /^\d{5}(?:[-\s]\d{4})?$/;  
return usZipPattern.test(value);  
}  
console.log(isUSZipCode('12345'));  
console.log(isUSZipCode('12345-6789'));
