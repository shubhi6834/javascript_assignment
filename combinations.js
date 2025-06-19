function stringCombinations(str) {
  const result = [];
  const ans = [];
  for (let i = 0; i < str.length; i++) {
    let combination = '';
    for (let j = i; j < str.length; j++) {
      combination += str[j];
      if(!result[combination]){
       result[combination]=1;
       ans.push(combination);
      }
    }
  }
  return ans;
}
console.log(stringCombinations("dog")); 
