function isSSN(value) {  
const ssnPattern = /^(?!000|666|9\d{2})\d{3}[- ]?(?!00)\d{2}[- ]?(?!0{4})\d{4}$/;  
return ssnPattern.test(value);  
}  
console.log(isSSN('123-45-6789'));  
console.log(isSSN('000-00-0000'));  
