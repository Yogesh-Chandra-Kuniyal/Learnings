const countDigits = (n) => {

    let count = 0;
    
    if(!n) return 1;

    while(n != 0){
        // n = parseInt(n / 10);
        n = Math.floor(n / 10);
        count = count + 1;
    }
    return count;
}
let num = 259;

let result = countDigits(num);

console.log(result);