function rangeBetween(start, end) {  
     const step = start < end ? 1 : -1;  
     const length = Math.abs(end - start) + 1;  
     return Array.from({ length }, (_, i) => start + i * step); 
} 
 
console.log(rangeBetween(4, 7)); console.log(rangeBetween(-4, 7));
