// https://leetcode.com/problems/missing-number/description/
//
var missingNumber = function(nums) {
  let a = -1;
  let filledArray = [...new Array(nums.length+1)].map(() => a+=1);

  for (let i = 0; i < nums.length; i += 1) {
    let index = filledArray.indexOf(nums[i]);
    if (index !== -1) {
    filledArray.splice(index, 1);
}
  }
  return filledArray;
};

console.log(missingNumber([3,0,1]));