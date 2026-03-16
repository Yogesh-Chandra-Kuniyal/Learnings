// Leetcode 70 | Climpbing Stairs | Easy

// Time Complexity : O(n)
// Space Complexity : O(1)



/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n <= 1) return 1;
    
    let prev1 = 1;
    let prev2 = 1;

    for(let  i = 2; i <= n; i++){
        let curr = prev1 + prev2;
        prev2 = prev1;
        prev1 = curr;
    }
    return prev1;
};



let n = 44;

console.log(climbStairs(n));