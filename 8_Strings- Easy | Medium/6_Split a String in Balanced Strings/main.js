// Leetcode 1221 : Split a String in Balanced Strings | Easy

// Time Complexity: O(n)
// Space Complexity: O(1)   



/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let Rcount = 0;
    let Lcount = 0;
    let balancedString = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] === 'R'){
            Rcount++;
        }else{
            Lcount++;
        }
        if(Lcount === Rcount){
            balancedString++;
        }
    }
    return balancedString;
};


let s = "RLRRLLRLRL";
s = "RLRRRLLRLL";
s = "LLLLRRRR"

console.log(balancedStringSplit(s));