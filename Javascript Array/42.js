function difference(arr1, arr2) { 
      const set1 = new Set(arr1);  
      const set2 = new Set(arr2);  
      const result = [...set1, ...set2].filter(item => !set1.has(item) || 
!set2.has(item)); 
    return result.map(String);  
} 
 
console.log(difference([1, 2, 3], [100, 2, 1, 10]));  
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]]));  
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
