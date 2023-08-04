//
// *   Return the second largest number in the array.
// *   @param {Number[]} nums - An array of numbers.
// *   @return {Number} The second largest number in the array.
// **/
function getSecondLargest(nums) {
    // Complete the function
    let largest1 = nums[0];
    let largest2 = null;
    for (let i = 1; i < nums.length; i += 1) {
        if (nums[i] > largest1) {
            largest2 = largest1;
            largest1 = nums[i];
        } else if (nums[i] != largest1 && nums[i] > largest2) {
          largest2 = nums[i];
        }
    }
    return largest2;
}

let nums = [2, 3, 6, 6, 5];
console.log(getSecondLargest(nums));
