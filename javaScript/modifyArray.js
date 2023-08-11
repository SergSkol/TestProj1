// https://www.hackerrank.com/challenges/js10-arrows/problem
//
/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
    return nums.map(e => (e % 2 == 0) ? e*2 : e*3);    
}

console.log(modifyArray([1,2,3,4,5]));
