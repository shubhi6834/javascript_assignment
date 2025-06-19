function isDomain(value) {  
const domainPattern = /^((?!-)[A-Za-z0-9-]{1,63}(?<!-)\.)+[A-Za-z]{2,6}$/;  
return domainPattern.test(value);  
}  
console.log(isDomain('example.com'));  
console.log(isDomain('invalid_domain'));  
