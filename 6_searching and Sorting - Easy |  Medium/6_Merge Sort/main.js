// Divide and Conqure

// Time Complexity = O(nlogn);
// Space Complexity = O[n];

let arr = [8,4,5,6,9,1,3,6]

const mergeSort = (arr) =>{
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

const merge = (left , right) =>{

    let res = [];
    let i = 0;
    let j = 0;

    while(i < left.length && j < right.length){
        if(left[i] < right[j]){
            res.push(left[i]);
            i++;
        }else{
            res.push(right[j]);
            j++;
        }
        // add remainig element
    }
    return[...res, ...left.slice(i), ...right.slice(j)];
}


let sortedArray = mergeSort(arr);
sortedArray.forEach((element) => {
  console.log(element);
});