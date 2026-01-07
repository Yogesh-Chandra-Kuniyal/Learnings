var moveZeroes = function(nums) {

    let pointer = 0;
    let size = nums.length;
    
    for (let index = 0; index < size; index ++){
        if(nums[index] !== 0){
            nums[pointer] = nums[index];
            pointer ++;
        }    
    }

    for (let index = pointer; index < size; index ++){
        nums[index] = 0;
    }

    return nums;
};

let nums = [0,1,0,3,12];
nums =[1,2,0,0,1];

console.log(moveZeroes(nums));