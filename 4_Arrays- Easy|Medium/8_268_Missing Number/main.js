var missingNumber = function(nums) {
    
    // nums.sort((a,b) => a - b);
    // console.log(nums);
    // let counting = 0;
    // for(let index = 0; index < nums.length; index ++){
    //     if(nums[index] != counting) return counting;
    //     counting ++;
    // }
    // return counting;

    let size = nums.length;
    let arrSum = 0;
    let sum = size * (size + 1) / 2;

    for(let index = 0; index < size; index ++){
        arrSum += nums[index];
    }

    return sum - arrSum;
};

let nums = [3,0,1,2];

console.log(missingNumber(nums));