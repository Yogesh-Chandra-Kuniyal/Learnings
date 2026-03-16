// Leetcode 70 | Min Cost CLimbing Stairs | Easy

// Time Complexity : O(n)
// Space Complexity : O(1)


function solve(idx, dp, cost){
    if(idx <= 1){
        return dp[idx];
    }

    if(dp[idx] !== -1){
        return dp[idx];
    }

    let left = solve(idx - 1, dp, cost) + cost[idx];
    let right = solve(idx - 2, dp, cost) + cost[idx];

    return dp[idx] = Math.min(left, right);
}
/**
 * @param {number[]} cost
 * @return {number}
 */
// var minCostClimbingStairs = function(cost) {
//     let n = cost.length;
//     let dp = new Array(n).fill(-1);
//     dp[0] = cost[0];
//     dp[1] = cost[1];
//      // console.log(dp)
//     let left = solve(n - 1, dp, cost);
//     let right = solve(n - 2, dp, cost);
//     return Math.min(left, right);
// };




var minCostClimbingStairs = function(cost) {
    let n = cost.length;
    let prev1 = cost[1];
    let prev2 = cost[0];

    for(let i = 2; i < n; i++){
        let curr = Math.min(prev1, prev2) + cost[i];
        prev2 = prev1;
        prev1 = curr;
    }
    return Math.min(prev1, prev2);
};



let cost = [10,15,20];
cost = [1,100,1,1,1,100,1,1,100,1];

console.log(minCostClimbingStairs(cost));