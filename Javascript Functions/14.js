
var amount = parseInt(prompt("Enter the amount : "));
var arr = [25, 10, 5, 2, 1];
var i = 0 ;

function func(amount){
    if(amount <= 0){
        console.log("Enter a valid number");
        return ans;
    }
    var ans = [];
    while(amount){
     if(amount - arr[i] >= 0){
        amount -= arr[i];
        ans.push(arr[i]);
     }
     else{
        i++;
     }
    }
    console.log(ans);
    return ans;
}

func(amount);
