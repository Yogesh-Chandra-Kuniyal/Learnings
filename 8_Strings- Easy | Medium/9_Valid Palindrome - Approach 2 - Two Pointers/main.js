// Leetcode : 125 | Valid Palindrome | Easy

// Time Complexity: O(n)
// Space Complexity: O(1)  



/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        while (left < right && !isAlphaNum(s[left])) left++;
        while (left < right && !isAlphaNum(s[right])) right--;

        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};

function isAlphaNum(ch) {
    return /^[a-z0-9]$/i.test(ch);
}

  




let s = "A man, a plan, a canal: Panama"

console.log(isPalindrome(s));