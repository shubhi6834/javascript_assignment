
var num = parseInt(prompt("Enter your number : "));

function primeNum(num){
    if(num < 1)
      return false;
    else if(num == 1)
      return false;
    else if( num <= 3)
      return true;
    for(var i = 2 ; i <= num/2 ; i++){
        if(num % i == 0)
        return false;
    }
    return true;
}

if(primeNum(num))
console.log("Its a prime number");
else
console.log("Its not a prime number");
