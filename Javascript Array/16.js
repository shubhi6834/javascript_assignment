
var input = prompt("Enter the array : ");
var arr = input.split(' ');
function leapYear(arr){
    var ans = [];
    for(var  i = 0 ; i < arr.length ; i++){
        var year = parseInt(arr[i]);
        if( (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) ){
            ans.push(year);
        }
    }
    return ans;
}

console.log(leapYear(arr));
