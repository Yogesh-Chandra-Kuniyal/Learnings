// Leetcode : 541 | Reverse String II | Easy

// Time Complexity: O(n)
// Space Complexity: O(n)   



/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let result = "";
    let n = s.length;

    for(let i = 0; i < n ; i += 2*k){
        let end = Math.min(n , i + k);

        // for reverse
        for(let j = end - 1 ; j >= i ; j--){
            result += s[j];
        }

        // as it as
        for(let j = end ; j < Math.min(n , i + 2 * k); j++){
            result += s[j];
        }
    }

    return result;
};


let s = "abcd" ,k = 4;
// s = "abcdefghijklmnopqrs", k = 3;

console.log(reverseStr(s, k));