
var input = (prompt("Enter the number : "));
var ans = '';
if(input != parseInt(input))
console.log("Enter a valid number");
else{
    for(var i = 0 ; i < input.length-1 ; i++){
       ans += input[i];
       if(parseInt(input[i]) % 2 == 0 && (parseInt(input[i+1])) % 2 == 0 )
         ans += '-';
    }
    ans += input[input.length-1] ;
    console.log(ans);
}
