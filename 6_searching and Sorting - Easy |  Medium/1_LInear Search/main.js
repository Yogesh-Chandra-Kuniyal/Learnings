const LinearSearch = (arr, target) =>{
    for(let index = 0 ; index < arr.length ; index ++){
        if(arr[index] === target) return index;
    }
    return false;
}
let arr = [1,2,3,4,5,6];
let target = 5;
console.log(LinearSearch(arr, target));