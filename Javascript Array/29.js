function num_string_range(start, end, step) {  
    let result = [];  
      
    if (typeof start === 'string' && start.length === 1 && typeof end === 'string' && end.length 
=== 1) {  
        let startCode = start.charCodeAt(0);  
        let endCode = end.charCodeAt(0);  
          
        for (let i = startCode; i <= endCode; i += step) {  
            result.push(String.fromCharCode(i));  
        }  
    }  
    else if (typeof start === 'number' && typeof end === 'number') {  
        for (let i = start; i <= end; i += step) {  
            result.push(i);  
        }  
    }  
      
    return result;  
}  
console.log(num_string_range('a', 'z', 2));  
console.log(num_string_range(1, 10, 2));    
