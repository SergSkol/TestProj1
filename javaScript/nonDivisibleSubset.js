//https://www.hackerrank.com/challenges/non-divisible-subset

function nonDivisibleSubset(k, s) {
  // Write your code here
  const rec = (k, arr, resArr, maxLen) => {
      const isDiv = (a, k) => {
        for (let j=0; j < a.length - 1; j += 1) {
          for (let l=j+1; l < a.length; l += 1) {
            if ((a[j] + a[l]) % k == 0) {
              return true;
            }
          }
        }
        return false;
      }

      if (arr.length == 0) {
          return maxLen;
      }

      for (let i=0; i < arr.length; i += 1) {
          const newArr = arr.slice();
          const num = newArr.splice(i, 1)[0];
          const newResArr = resArr.slice();
          newResArr.push(num);

          if (newResArr.length > maxLen) {
            if (!isDiv(newResArr, k)) {
              maxLen = Math.max(maxLen, newResArr.length);
              console.log(newResArr);
            }
          }

          maxLen = rec(k, newArr, newResArr, maxLen);
      }
      return maxLen;
  }
  return rec(k, s, [], 0);
}

let k = 0;
let s = [];

k = 3;
s = [1, 7, 2, 4];
console.log(nonDivisibleSubset(k, s));

k = 4;
s = [19, 10, 12, 10, 24, 25, 22];
console.log(nonDivisibleSubset(k, s));

k = 7;
s = [278, 576, 496, 727, 410, 124, 338, 149, 209, 702, 282];//, 718, 771, 575, 436];
console.log(nonDivisibleSubset(k, s))