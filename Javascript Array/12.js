
var a = [1, 2, 5, 1];
var sum = 0 ;
var product = 1 ;
for(let i = 0 ; i < a.length ; i++){
    sum += parseInt(a[i]);
    product *= parseInt(a[i]);
}
if(!Number.isNaN(sum) && !Number.isNaN(product)){
    console.log("The sum is : " + sum);
    console.log("The product is : " + product);
}
else
console.log("Enter an array with numeric digits");
