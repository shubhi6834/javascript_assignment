function isHTML(value) {  
const htmlPattern = /<\/?[a-z][\s\S]*>/i;  
return htmlPattern.test(value);  
}  
console.log(isHTML('<p>Hello</p>'));  
console.log(isHTML('Hello'));
