function isCanadaPostCode(value) {  
const canadaPostPattern = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;  
return canadaPostPattern.test(value);  
}  
console.log(isCanadaPostCode('K1A 0p1'));  
console.log(isCanadaPostCode('12345')); 
