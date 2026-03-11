// Count number of Subsequence Whose sum is K

// Time Complexity : O(2^n)
// Space Complexity : O(1)

function printS(idx, s, sum, n, arr){

    // this can only be done if array contains positive only

    // if(s > sum) return 0;

    if(idx === n){
        if(s === sum){
            return 1;
        }
        return 0;
    }

    // for taking
    // ds.push(arr[idx]);
    s += arr[idx];

    let left = printS(idx + 1, s, sum, n, arr);

    // for not taking
    // ds.pop();
    s -= arr[idx];
    let right = printS(idx + 1, s, sum, n, arr);

    return left + right;
}


function sumOfSubsequence(arr, sum){
    let n = arr.length;
    let ds = [];
    let count = printS(0, 0, sum, n, arr)
    return count;
}


let arr =[1,2,1,1], sum = 2;

console.log(sumOfSubsequence(arr, sum))