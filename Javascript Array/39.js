function filter_array_values(arr) {  
     return arr.filter(item => item !== false && item !== null && item !== 0 && item 
!== ''); 
} 
 
console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));
