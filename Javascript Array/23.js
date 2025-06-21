function flatten(arr) {  
    return arr.reduce((flat, item) => {  
        if (Array.isArray(item)) {  
            return flat.concat(flatten(item));   
        } else {  
            return flat.concat(item);   
        }  
    }, []);  
}  
  
function difference(arr1, arr2) {  
    arr1 = flatten(arr1);  
    arr2 = flatten(arr2);  
      
    const result = [  
        ...arr1.filter(item => !arr2.includes(item)),  
        ...arr2.filter(item => !arr1.includes(item))  
    ];  
      
    return result;  
}  
console.log(difference([1, 2, 3], [100, 2, 1, 10]));   
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5,6]])); 
