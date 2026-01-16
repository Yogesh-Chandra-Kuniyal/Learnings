// Leetcode 3541 : Find Most Frequent Vowel and Consonant

// Time Complexity: O(n)
// Space Complexity: O(1)   (at most 26 chars)



/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    // store all the values with freq in a map
    let map = {};

    for(let i = 0; i < s.length; i++){

        // map[s[i]] = (map[s[i]] || 0) + 1;
        if(!map[s[i]]){
            map[s[i]] = 1;
        }else{
            map[s[i]]++
        }
    }

    let vowels = new Set(['a','e','i','o','u']);

    let maxVowels = 0;
    let maxConsonants = 0;
    for(let key in map){
        if(vowels.has(key)){
            maxVowels = Math.max(maxVowels, map[key]);
        }else{
            maxConsonants = Math.max(maxConsonants, map[key]);
        }
    }
    
    return (maxVowels + maxConsonants);
};


let s = "successes";

console.log(maxFreqSum(s));