 function remove_array_element(arr, elem) {  
       return arr.filter(item => item !== elem); 
 }  
 
console.log(remove_array_element([2, 5, 9, 6], 5));
