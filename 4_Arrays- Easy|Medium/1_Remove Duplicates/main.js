var removeDuplicates = function(nums) {

    if (nums.length == 1) return 1;

    let pointer = 1;

    for(let index = 1 ; index < nums.length ; index++){
        if(nums[index] != nums[index-1]){
            nums[pointer] = nums[index];
            pointer++;
        }
    }
    return pointer;
};

let nums = [1];

console.log(removeDuplicates(nums));