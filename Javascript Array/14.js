
var a = [1, 2, 4, 10, 'a','a', 10, 4, 2, 8, 21];
// var a= [1,2,3,2];

function removeDuplicates(a){
    let count = new Set(a);
    return [...count];
}

console.log(removeDuplicates(a));
