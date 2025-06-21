function curday(separator) {  
      let today = new Date();  
      let day = today.getDate();  
      let month = today.getMonth() + 1;  
      let year = today.getFullYear(); 
 
  return `${month < 10 ? '0' + month : month}${separator}${day < 10 ? '0' + day : 
day}${separator}${year}`; 
} 
 
console.log(curday('/'));  
console.log(curday('-'));
