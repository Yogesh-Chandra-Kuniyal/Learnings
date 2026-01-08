const bubbleSort = (arr) =>{
    let n = arr.length;
    for(let i = 0 ; i < n ; i++){

        let isSwapped = false;

        for(let j = 0 ; j < n-i-1 ; j++){
            if(arr[j] > arr[j+1]){
               let temp = arr[j];
               arr[j] = arr[j+1];
               arr[j+1] = temp; 

               isSwapped = true;
            }
        }
        if(!isSwapped) break;
    };
    return arr;
}
let arr = [3,6,1,5,7,14,56,13,4,2];
bubbleSort(arr);
arr.forEach(element => {
    console.log(element);
});