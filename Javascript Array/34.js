function nthlargest(arr, n)  {  
     const sortedArr = [...arr].sort((a, b) => b - a);  
     return sortedArr[n - 1];  
}  
console.log(nthlargest([43, 56, 23, 89, 88, 90, 99, 652], 4)); 
