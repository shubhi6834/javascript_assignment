
var num1 = undefined;
var num2 = null ;
var num3 = 123 ;
var num4 = "Shubhangiiii" ;
var num5 = true;

function inputType(num){
    return typeof num;
}

console.log(inputType(num1));
console.log(inputType(num2));
console.log(inputType(num3));
console.log(inputType(num4));
console.log(inputType(num5));
console.log(inputType(inputType));
