// https://leetcode.com/problems/longest-consecutive-sequence/
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  if (nums.length === 0) return 0;
  nums.sort((a, b) => a - b)
  count = 1
  max_count = 1
  for(let i=0;i<nums.length-1;i+=1) {
      if(nums[i+1] - nums[i] === 0) {
        //next
      } else if (nums[i+1] - nums[i] === 1) {
          count +=1
      } else {          
          count = 1
      }
      max_count = Math.max(max_count, count);
  }
  return max_count
};

// const nums = [100,4,200,1,3,2]
const nums = [0,3,7,2,5,8,4,6,0,1]
console.log(longestConsecutive(nums))
