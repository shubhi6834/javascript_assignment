function removeFalsyValues(arr) {  
    return arr.filter(item => Boolean(item) === true);  
}  
  
const sampleArray = [NaN, 0, 15, false, -22, '', undefined, 47, null];  
const result = removeFalsyValues(sampleArray);  
  
console.log(result); 
