// Printing Subsequence Whose sum is K


function printS(idx, ds, s, sum, arr, n, result){
    if(idx === n){
        if(s === sum){
            result.push([...ds]);
        }
        return;
    }
    // take
    ds.push(arr[idx]);
    s += arr[idx];
    printS(idx + 1, ds, s, sum, arr, n, result)

    // not taking
    ds.pop();
    s -= arr[idx]
    printS(idx + 1, ds, s, sum, arr, n, result)
}


function sumOfSubsequence(arr, sum){
    let n = arr.length;
    let ds = [];
    let result = []
    printS(0, ds, 0, sum, arr, n, result);
    return result;
}


let arr =[1,2,1], sum = 2;

console.log(sumOfSubsequence(arr, sum))