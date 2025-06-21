function retrieveTruthyValues(arr) {  
    return arr.filter(item => Boolean(item));  
}  
const sampleArray = [NaN, 0, 15, false, -22, '', undefined, 47, null];  
console.log(retrieveTruthyValues(sampleArray)); 
