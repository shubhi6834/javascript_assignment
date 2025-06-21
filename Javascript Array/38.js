function move(arr, fromIndex, toIndex) { 
       const item = arr.splice(fromIndex, 1)[0];  
       arr.splice(toIndex, 0, item);  
       return arr;  
} 
 
console.log(move([10, 20, 30, 40, 50], 0, 2));  
console.log(move([10, 20, 30, 40, 50], -1, -2)); 
