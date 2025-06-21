function findDuplicates(arr) {  
    const seen = new Set();  
    const duplicates = [];  
  
    for (let i = 0; i < arr.length; i++) {  
        if (seen.has(arr[i])) {  
            if (!duplicates.includes(arr[i])) {  
                duplicates.push(arr[i]);  
            }  
        } else {  
            seen.add(arr[i]);  
        }  
    }  
  
    return duplicates;  
}  
  
const array = [1, 2, 3, 4, 5, 6, 3, 7, 8, 9, 5, 3];  
const duplicates = findDuplicates(array);  
console.log("Duplicate values:", duplicates); 
