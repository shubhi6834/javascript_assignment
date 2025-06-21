function flatten(arr, shallow = false) {  
    if (shallow) {  
        return arr.reduce((flat, item) => flat.concat(item), []);  
    } else {  
        return arr.reduce((flat, item) => {  
            if (Array.isArray(item)) {  
                return flat.concat(flatten(item));  
            } else {  
                return flat.concat(item);  
            }  
        }, []);  
    }  
}  
  
console.log(flatten([1, [2], [3, [[4]]], [5, 6]]));  
console.log(flatten([1, [2], [3, [[4]]], [5, 6]], true)); 
