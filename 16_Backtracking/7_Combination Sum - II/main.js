// Leetcode 40 : Combination Sum II | Medium

// Time Complexity: O((2^n) * k)
// Space Complexity: O(k * x) k = avg length, x = no. of combination


function findingSubSequence(idx, target, ds, candidates, result){
    

    if(target === 0){
        result.push([...ds]);
        return;
    }

    for(let i = idx; i < candidates.length; i++){
        if(i > idx && candidates[i] === candidates[i - 1]) continue;
        
        if(candidates[i] > target) break;

        ds.push(candidates[i]);

        findingSubSequence(i + 1, target - candidates[i], ds, candidates, result);
        ds.pop() 

    }
}


/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let ds = [];
    result = [];
    candidates.sort((a, b) => a - b);
    findingSubSequence(0, target, ds, candidates, result)
    return result;
    
};



candidates = [10,1,2,7,6,1,5], target = 8;

console.log(combinationSum2(candidates, target));