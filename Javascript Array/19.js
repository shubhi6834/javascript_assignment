function sumArrays(array1, array2) {  
    const maxLength = Math.max(array1.length, array2.length);  
    const result = [];  
  
    for (let i = 0; i < maxLength; i++) {  
  
        const value1 = i < array1.length ? array1[i] : 0;  
        const value2 = i < array2.length ? array2[i] : 0;  
  
        result.push(value1 + value2);  
    }  
  
    return result;  
}  
  
  
const array1 = [1, 0, 2, 3, 4];  
const array2 = [3, 5, 6, 7, 8, 13];  
  
const summedArray = sumArrays(array1, array2);  
console.log(summedArray); 
