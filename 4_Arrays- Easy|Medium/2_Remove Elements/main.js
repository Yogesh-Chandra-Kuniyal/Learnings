var removeElement = function(nums, val) {
    
    let count = 0;
    for(let index = 0; index < nums.length; index++){
        if(nums[index] !== val){
            nums[count] = nums[index];
            count++;
        }
    }
    return count;
};

let val = 3;

let nums = [3,2,2,3];

console.log(removeElement(nums, val));