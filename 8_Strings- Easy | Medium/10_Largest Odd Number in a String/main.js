// Leetcode : 1903 | Largest Odd Number in a String | Easy

// Time Complexity: O(n)
// Space Complexity: O(1)  



/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    let n = num.length;
    for(let idx = n - 1; idx >= 0; idx--){
        // if ((num[idx] - '0') % 2 !== 0)
        if(parseInt(num[idx]) % 2 !== 0){
            return num.slice(0, idx + 1);
        }
    }
    return "";
};

  




let num = "420618";

console.log(largestOddNumber(num));