var str = prompt("Enter your String :  ");
var ans = 0;
var temp = 'aeiouAEIOU';
for(i=0 ; i<str.length; i++){
  if(temp.includes(str[i]))
     ans++;
}
console.log(ans);
