
var a = [1, 2, 4, 10];

function squaresSum(a){
    var sum = 0 ;
    for(let i = 0 ; i < a.length ; i++){
      var num = parseFloat(a[i]);
      if(!Number.isNaN(num))
        sum += (num * num);
      else
       return NaN;
    }
    return sum ;
}
var s = squaresSum(a) ;
if(!Number.isNaN(s))
console.log("The sum of squares of the numeric vector is : " + s);
else
console.log("Enter only numeric digits");
