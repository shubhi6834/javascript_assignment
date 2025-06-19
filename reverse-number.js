function reverseNumber(num) {
  const reversed = num.toString().split('').reverse().join('');
  return parseInt(reversed);
}
const num = 32243;
console.log(reverseNumber(num));  
