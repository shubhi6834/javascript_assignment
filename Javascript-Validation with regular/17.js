function isHexColor(value) {  
const hexColorPattern = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;  
return hexColorPattern.test(value);  
}  
console.log(isHexColor('#1F3A'));  
console.log(isHexColor('1G3A'));  
