function empty_array(arr) {  
     return arr.slice(0, 0); 
} 
let original = [1, 2, 3];  
let empty = empty_array(original);  
console.log(empty);  
console.log(original); 
