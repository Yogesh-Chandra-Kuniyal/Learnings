// Leetcode 58: Length of Last Word

// Time Complexity: O(n)
// Space Complexity: O(1)



/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let length = 0;
    for(let i = s.length-1; i >= 0; i--){

        if(length && s[i] === " "){
            break;
        }
        if(s[i] !== " "){
            length++;
        }
    }
    return length;
};


let s = "   fly me   to   the moon  ";

console.log(lengthOfLastWord(s))