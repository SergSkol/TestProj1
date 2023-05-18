// https://leetcode.com/problems/group-anagrams/description/
// Given an array of strings strs, group the anagrams together. 
// You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a 
// different word or phrase, typically using all the original letters exactly once.
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const eq = (s1, s2) => {
      const ss1 = s1.split('').sort().join();
      const ss2 = s2.split('').sort().join();

      return ss1 == ss2
  }

  const output = [];
  while (strs.length > 0) {
      str = strs.shift();
      const sub = [];
      sub.push(str);
      let j = 0;
      while (j < strs.length) {
          if (eq(str, strs[j])) {
              sub.push(strs[j]);
              strs.splice(j,1);
          } else {
              j += 1;
          }
      }
      output.push(sub);
  }
  return output;
};

const arr = ["eat","tea","tan","ate","nat","bat"];
console.log(groupAnagrams(arr))