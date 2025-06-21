function findPair(numbers, target) {  
    let map = {};  
    for (let i = 0; i < numbers.length; i++) {  
        let complement = target - numbers[i];  
        if (map[complement] !== undefined) {  
            return [map[complement], i+1];  
        }  
        map[numbers[i]] = i+1;   
    }  
    return null;  
}  
let numbers = [10, 20, 10, 40, 50, 60, 70];  
let target = 50;  
  
console.log(findPair(numbers, target));  
