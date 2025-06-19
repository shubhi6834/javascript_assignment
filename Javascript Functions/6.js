var str = prompt("Enter your string : ");
var temp = str.split(' ');
var ans = '';
for(var i = 0 ; i < temp.length ; i++){
    if(temp[i].length > ans.length)
    ans = temp[i];
}
console.log(ans);
