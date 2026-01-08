/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    while(start < end){
        let mid = Math.floor((start + end)/2);
        if(nums[mid] === target){
            return mid;
        }else if(nums[mid] > target){
            end = mid - 1;
        }
        else{
            start = mid + 1;
        }
    }
    return -1
};
let nums = [-1,0,3,5,9,12];
let target = 9;
console.log(search(nums, target));