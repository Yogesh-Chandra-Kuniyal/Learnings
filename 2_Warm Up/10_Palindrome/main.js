var isPalindrome  = function(x) {

    if(x < 0) return false;
    if(x == 0) return true;
    let n = x;
    let rev = 0;
    while(n > 0){
        rev = (rev * 10) + (n%10);
        n = Math.floor(n / 10);
    }
    return (rev === x);
}

let num = 2552;

console.log(isPalindrome(num));