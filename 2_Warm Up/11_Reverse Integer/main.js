var reverse = function(x){

    if (x == 0) return 0;
    let n = Math.abs(x);
    let rev = 0;
    while(n != 0){
        rev = rev * 10 + (n % 10);
        n = Math.floor(n / 10);
    }

    let limit = Math.pow(2,31);
    if(rev < -limit || rev > limit) return 0;

    return (x < 0) ? -rev : rev;
};

let num = -1234;

console.log(reverse(num));