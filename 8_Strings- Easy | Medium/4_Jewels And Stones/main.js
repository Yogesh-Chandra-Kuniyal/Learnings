// Leetcode 771 : Jewels And Stones | Easy

// Time Complexity: O(n)
// Space Complexity: O(1)    Because j.Set can max hold 26 x 2 = 52 values



/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let jSet = new Set();
    for(let i = 0; i < jewels.length; i++){
        jSet.add(jewels[i]);
    }

    let count = 0;
    for(let i = 0; i < stones.length; i++){
        if(jSet.has(stones[i])){       // O(1)
            count++;
        }
    }
    
    return count;
};


let jewels = "aA", stones = "aAAbbbb";

console.log(numJewelsInStones(jewels, stones));