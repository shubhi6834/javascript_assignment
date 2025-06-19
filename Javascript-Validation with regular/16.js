function isHexadecimal(value) {  
const hexPattern = /^[0-9A-Fa-f]+$/;  
return hexPattern.test(value);  
}  
console.log(isHexadecimal('1F3A'));  
console.log(isHexadecimal('1G3A'));  
