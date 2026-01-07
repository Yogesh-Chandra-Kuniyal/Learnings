var merge = function(nums1, m, nums2, n) {
    
    let pointer1 = m-1;
    let pointer2 = n-1;
    
    for(let index = m+n-1 ; index >= 0 ; index --){

        if(pointer2 < 0){
            break;
        }
        if(pointer1 > 0 && nums1[pointer1] > nums2[pointer2]){
            nums1[index] = nums1[pointer1]
            pointer1 --;
        }else{
            nums1[index] = nums2[pointer2];
            pointer2 --;
        }
    }

    return nums1;
};

let nums1 = [1,2,3,0,0,0];
let m = 3;
let nums2 = [2,5,6];
let n = 3;

console.log(merge(nums1, m, nums2, n));