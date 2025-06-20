
function array_Clone(arr){
    return [...arr]; //spread Operator
    //return [].concat(arr);
}


console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
