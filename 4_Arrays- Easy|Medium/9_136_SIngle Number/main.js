// concept of XOR
// 5 ^ 3
// 0101
// 0011
// 0110 → 6

var singleNumber = function(nums) {
    
    let ans = 0;
    nums.forEach(val =>{
        ans ^= val;
    })
    return ans;
};

let nums = [2,2,1];

console.log(singleNumber(nums));