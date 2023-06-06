// https://leetcode.com/problems/palindromic-substrings

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  let count = 0;
  
  // Helper function to expand around the center and count palindromes
  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      count++;
      left--;
      right++;
    }
  }
  
  for (let i = 0; i < s.length; i++) {
    // Expand around the center for odd length palindromes
    expandAroundCenter(i, i);
    
    // Expand around the center for even length palindromes
    expandAroundCenter(i, i + 1);
  }
  
  return count;
};

let s = '';

s = "abc";
console.log(countSubstrings(s));

s = "aaa";
console.log(countSubstrings(s));