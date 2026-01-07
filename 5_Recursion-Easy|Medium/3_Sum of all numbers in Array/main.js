// Sum of all the numbers in the array
let arr = [1,2,3,4,5,6];

const sumOfArray = (index) =>{
    if(index === 0){
        return arr[index]
    }
    return arr[index] + sumOfArray(index - 1);
}

let size = arr.length;
console.log(sumOfArray(size - 1));

// sum of all the odd number in an array
const sumOfOddNumbers = (index) =>{
    if(index === 0){
        if(arr[index] % 2 === 0) return 0;
        return arr[index];
    }
    if(arr[index] % 2 === 1){
        return arr[index] + sumOfOddNumbers(index - 1);
    }
    return 0 + sumOfOddNumbers(index - 1);
}

console.log(sumOfOddNumbers(size - 1));