// Leetcode : 205 | Isomophic Strings | Easy

// Time Complexity: O(n)
// Space Complexity: O(k)



/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;

    let mapST = new Map();
    let mapTS = new Map();

    for (let i = 0; i < s.length; i++) {
        let a = s[i];
        let b = t[i];

        if (
            (mapST.has(a) && mapST.get(a) !== b) ||
            (mapTS.has(b) && mapTS.get(b) !== a)
        ) {
            return false;
        }

        mapST.set(a, b);
        mapTS.set(b, a);
    }

    return true;
};




let nums = [6,1,3,2]

console.log(minimumPairRemoval(nums));
