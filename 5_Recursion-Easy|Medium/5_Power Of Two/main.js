/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {

    if(n === 1) return true;

    if(n % 2 !== 0 || n < 1) return false;

    return isPowerOfTwo(n/2);
};
let n = 32;
console.log(isPowerOfTwo(n));