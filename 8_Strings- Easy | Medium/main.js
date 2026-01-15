// Leetcode 2942 : Find Words Containing Charcter

// Time Complexity: O(total characters) → optimal
// Space Complexity: O(result size) → minimal



/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let n = words.length;
    let result = [];
    for(let i = 0 ; i < n ; i++){
        for(let j = 0 ; j < words[i].length ; j++){
            if(words[i][j] === x){
                result.push(i);
                break;
            }
        }
    }
    return result;
};


let words = ["leet","code"], x = "e";
words = ["abc","bcd","aaaa","cbc"], x = "a";

console.log(findWordsContaining(words, x));