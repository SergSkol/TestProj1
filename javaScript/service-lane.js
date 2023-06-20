//https://www.hackerrank.com/challenges/service-lane/problem
// *
// * The function is expected to return an INTEGER_ARRAY.
// * The function accepts following parameters:
// *  1. INTEGER n
// *  2. 2D_INTEGER_ARRAY cases
// */

function serviceLane(width, cases) {
  const result =[];
   for (let c = 0; c < cases.length; c += 1) {
    let minWidth = 3;
    let i = cases[c][0];
    let j = cases[c][1];
    for (let w = i; w <= j; w += 1) {
      if (minWidth > width[w]) {
        minWidth = width[w];
      }
    }
    result.push(minWidth);
   }
   return result;
}

let width = [2, 3, 1, 2, 3, 2, 3, 3];
let cases = [[0, 3], [4, 6], [6, 7], [3, 5], [0, 7]];
console.log(serviceLane(width, cases));
