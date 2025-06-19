function isPalindrome(str) {
  const cleanStr = str.replace(/\s+/g, '').toLowerCase();
  const reversedStr = cleanStr.split('').reverse().join('');
  return cleanStr === reversedStr;
}
console.log(isPalindrome("madam"));        
console.log(isPalindrome("nurses run"));   
console.log(isPalindrome("hello"));        
