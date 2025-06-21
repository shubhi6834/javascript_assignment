function random_item(arr) {  
     const randomIndex = Math.floor(Math.random() * arr.length);  
     return arr[randomIndex]; 
 }  
 
console.log(random_item([1, 2, 3, 4, 5]));
