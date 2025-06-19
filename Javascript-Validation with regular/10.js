function isAlphanumeric(value) {  
const alphanumericPattern = /^[a-zA-Z0-9]+$/;  
return alphanumericPattern.test(value);  
}  
console.log(isAlphanumeric('abc123'));  
console.log(isAlphanumeric('abc123!'));
