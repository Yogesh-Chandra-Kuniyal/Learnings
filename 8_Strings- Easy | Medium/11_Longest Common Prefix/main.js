// Leetcode : 14 | Longest Common Prefix | Easy

// Time Complexity: O(n * m)
                // n = number of strings
                // m = length of the shortest string
// Space Complexity: O(1)

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return "";

    let size = strs.length;
    let result = "";
    for (let idx = 0; idx < strs[0].length; idx++){
        let ch = strs[0][idx];
        for (let element = 0; element < size; element++) {
            if(strs[element][idx] !== ch){
                return result;
            }
        }
        result += ch;
    }
    return result;
};

let strs = [];

console.log(longestCommonPrefix(strs));
