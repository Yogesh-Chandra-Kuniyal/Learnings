const insertionSort = () => {
  let n = arr.length;
  for(let i = 1 ; i < n ; i++){
    let current = arr[i];
    let prev = i - 1;
    while(arr[prev] > current && prev >= 0){
        arr[prev + 1] = arr[prev];
        prev--
    }
    arr[prev+1] = current;
  }
  return arr;
};
arr = [1, 5, 2, 7, 12, 65, 4, 14];
insertionSort(arr);
arr.forEach((element) => {
  console.log(element);
});

// [1, 5, 2, 7, 12, 65, 4, 14]
// [1, 2, 5, 7, 12, 65, 4, 14]
// [1, 2, 5, 7, 12, 65, 4, 14]
// [1, 2, 5, 7, 12, 65, 4, 14]
// [1, 2, 5, 7, 12, 65, 4, 14]
// [1, 2, 5, 7, 12, 4, 65, 14]
    // [1, 2, 5, 7, 12, 4, 65, 14]
    // [1, 2, 5, 7, 4, 12, 65, 14]
    // [1, 2, 5, 4, 7, 12, 65, 14]
    // [1, 2, 4, 5, 7, 12, 65, 14]
// [1, 2, 4, 5, 7, 12, 14, 65]