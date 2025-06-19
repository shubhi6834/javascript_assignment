function isValidURL(value) {  
const urlPattern = 
/^(https?:\/\/)?([\w-]+(?:\.[\w-]+)+)(:\d+)?(\/[-\w@:%_\+.~#?&//=]*)?$/;  
return urlPattern.test(value);  
}  
console.log(isValidURL('https://www.example.com'));  
console.log(isValidURL('www.example.com'))  
console.log(isValidURL('not-a-url')); 
