function countVowels(str) {  
const vowels = str.match(/[aeiouAEIOU]/g);  
return vowels ? vowels.length : 0;  
}  
console.log(countVowels('United States')); 
