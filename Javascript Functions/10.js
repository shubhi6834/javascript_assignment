
var n = parseInt(prompt("Enter value of n : "));
var ans = [];

for(var i = 0 ; i < n ; i++){
    var row = [];
    for(var j = 0 ; j < n ; j++){
        (i == j) ? row.push(1) : row.push(0);
    }
    ans.push(row);
}
console.log(ans);
