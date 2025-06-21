function array_range(start, length) {  
     return Array.from({ length }, (_, i) => start + i); 
}  
 
console.log(array_range(1, 4));  
console.log(array_range(-6, 4));
