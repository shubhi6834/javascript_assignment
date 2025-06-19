function customTrim(str) {
  return str.replace(/^\s+|\s+$/g, '');
}
console.log(customTrim("   Hello World!   "));     
console.log(customTrim("\n\t  JavaScript \t\n"));  
