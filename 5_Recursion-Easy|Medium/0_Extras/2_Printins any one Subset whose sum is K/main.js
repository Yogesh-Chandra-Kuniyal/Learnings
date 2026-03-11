// Printing any one Subset whose sum is K

// Techinique to print only one answer

// Time Complexity : O(2^n)
// Space Complexity : O(n)


function printS(idx, ds, s, sum, arr, n){
    if(idx === n){
        if(s === sum){
            console.log(ds);
            return true;
        }
        return false;
    }
    // take
    ds.push(arr[idx]);
    s += arr[idx];
    if(printS(idx + 1, ds, s, sum, arr, n) === true){
        return true;
    }


    // not taking
    ds.pop();
    s -= arr[idx]

    if(printS(idx + 1, ds, s, sum, arr, n) === true){
        return true;
    }
    return false;
}


function sumOfSubsequence(arr, sum){
    let n = arr.length;
    let ds = [];
    printS(0, ds, 0, sum, arr, n);
}


let arr =[1,2,1], sum = 2;

sumOfSubsequence(arr, sum);