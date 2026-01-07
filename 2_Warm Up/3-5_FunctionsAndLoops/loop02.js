function searchElement(arr, x){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == x){
            return i;
        }
    }
    return -1;
}
let arr = [-1,4,2,0,-11,10,8,30,22,30];
console.log(arr);
let result = searchElement(arr, 10);
console.log(result);

// Write a function that return the number of negative number in the array

const negative = (arr) => {
    let negCount = 0;
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] < 0){
            negCount++;
        }
    }
    return negCount;
}

console.log(negative(arr))

// Write a function to return the largest number in the array

const largestNumber = (arr) => {
    let largest = -Infinity;
    for(let i = 0 ; i < arr.length ; i++){
        if(largest < arr[i]){
            largest = arr[i];
        }
    }
    return largest;
}

console.log(largestNumber(arr));

// Write a function to return the smallest number in the array

const smallestNumber = (arr) =>{
    let smallest = Infinity;
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] < smallest){
            smallest = arr[i];
        }
    }
    return smallest;
}

console.log(smallestNumber(arr));


// Write a function to return the second largest number in the array

const secondLargest = (arr) =>{
    if(arr.length < 2) return null;
    let largest = -Infinity;
    let secLargest = -Infinity;
    for(let i = 0; i < arr.length ; i++){
        if(arr[i] > largest){
            secLargest = largest;
            largest = arr[i];
        }
        else if(arr[i] > secLargest && arr[i] != largest){
            secLargest = arr[i];
        }
    }
    return secLargest;
}

console.log(secondLargest(arr));


// pattern 
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

let n = 5
for(let i = n; i > 0 ; i--){
    let row = "";
    for (let j = 1 ; j <= i ; j++){
        row = row + j + " ";
    }
    console.log(row);
}

// pattern
// 1
// 1 0
// 1 0 1
// 1 0 1 0
// 1 0 1 0 1

for(let i = 0; i < n ; i++){
    let row = ""
    let flag = 1;
    for(let j = 0 ; j <= i ; j++){
        row = row + flag + " ";
        flag == 1 ? flag = 0 : flag = 1; 
    }
    console.log(row)
}

// pattern
// 1 
// 0 1 
// 0 1 0 
// 1 0 1 0 
// 1 0 1 0 1

let flag = 1;
for(let i = 0; i < n ; i++){
    let row = ""
    for(let j = 0 ; j <= i ; j++){
        row = row + flag + " ";
        flag == 1 ? flag = 0 : flag = 1; 
    }
    console.log(row)
}


// Write a function that returns the count of digits in the number

// const CountDigits = (nums) => {
//     let digits = 0;
//     while(nums > 1){
//         digits++;
//         nums = nums/10;
//         console.log(nums);
//     }
//     return digits;
// }

// var nums = 1234;
// console.log(CountDigits(nums));