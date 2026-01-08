const selectionSort = () => {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let min = i;
    for (let j = i; j < n; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (min !== i) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
};
arr = [1, 5, 2, 7, 12, 65, 4, 14];
selectionSort(arr);
arr.forEach((element) => {
  console.log(element);
});
