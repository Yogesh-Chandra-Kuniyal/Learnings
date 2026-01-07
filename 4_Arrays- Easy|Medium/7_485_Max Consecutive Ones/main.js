var findMaxConsecutiveOnes = function(nums) {

    let size = nums.length;
    let maxCount = 0;
    let tempMaxCount = 0;

    for(let index = 0; index < size ; index ++){
        if(nums[index] === 1){
            tempMaxCount++;
        }else{
            maxCount = Math.max(maxCount, tempMaxCount);
            tempMaxCount = 0;
        }
    }

    return Math.max(maxCount, tempMaxCount);
};

let nums = [1,1,0,1,1,1];

console.log(findMaxConsecutiveOnes(nums));