function countWords(str) {
  str = str.trim();
  str = str.replace(/\s+/g, ' ');
  if (str === '') return 0;
  const words = str.split(' ');
  return words.length;
}
console.log(countWords("   Hello   world!   "));            
console.log(countWords("JavaScript   is  fun"));             
console.log(countWords(" \n\t  Count   me \n in \t now  ")); 
console.log(countWords(""));                                 







