var arr=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var count = [];
var max = 0;
var ele ;
for(var i = 0 ; i < arr.length ; i++){
    if(count[arr[i]])
    count[arr[i]]++;
    else
    count[arr[i]] = 1;
    
    if(count[arr[i]] > max){
        ele = arr[i];
        max = count[arr[i]];
    }
}
console.log(ele + ' ( ' + max + ' times )');
