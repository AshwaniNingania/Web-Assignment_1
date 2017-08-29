
function square(item){
    return item * item;
}

function foreach(arr,square) {
    i=0;
    while (i < arr.length){
       square(arr[i++]);

    }
}

var arr = [1,2,3]
foreach(arr,square);
console.log("Foreach Function : "+arr);


function map(arr,square) {
    var map_arr = [];
    var i = 0;
    while (i < arr.length){
        var sq = square(arr[i]);
        map_arr[i++] = sq;
    }
    return map_arr;
}

var arr = [1,2,3,4,5];
var res = map(arr,square);
console.log("Map function : "+res);
