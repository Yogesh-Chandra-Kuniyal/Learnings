// Leetcode 39 : Combination Sum | Medium

// Time Complexity: O((2^n) * k)
// Space Complexity: O(k * x) k = avg length, x = no. of combination


function findingSubSequence(idx, target, ds, n, candidates, result){
    if(idx === n){
        if(target === 0){
            // console.log(ds);
            result.push([...ds]);
        }
        return;
    }

    // taking
    if(candidates[idx] <= target){
        ds.push(candidates[idx]);

        findingSubSequence(idx, target - candidates[idx], ds, n,candidates, result);

        ds.pop();
    }
    
    // not taking
    findingSubSequence(idx + 1, target, ds, n, candidates, result);
       
}


/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let n = candidates.length;
    let ds = [];
    result = [];
    findingSubSequence(0, target, ds, n, candidates, result)
    return result;
    
};



candidates = [2,3,6,7], target = 7

console.log(combinationSum(candidates, target));