function longest_common_starting_substring(strings) {  
    if (strings.length === 0) return '';  
    let shortestString = strings.reduce((min, str) => str.length < min.length ? str : min);  
      
    for (let i = 0; i < shortestString.length; i++) {  
        let currentChar = shortestString[i];  
        for (let str of strings) {  
            if (str[i] !== currentChar) {  
                return shortestString.substring(0, i);  
            }  
        }  
    }  
      
    return shortestString;  
}  
console.log(longest_common_starting_substring(['go', 'google'])); 
