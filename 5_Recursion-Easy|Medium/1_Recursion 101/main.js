// count numbers from 1 to n using recursion
let n = 20
var count = function (x){
    if(x > n){
        return;
    }
    console.log(x);
    count(++x);
}

count(1);