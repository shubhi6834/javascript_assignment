function containsAlphaDashUnderscore(value) {  
const pattern = /^[a-zA-Z-_]+$/;  
return pattern.test(value);  
}  
console.log(containsAlphaDashUnderscore('example_word'));  
console.log(containsAlphaDashUnderscore('example word!'));  
