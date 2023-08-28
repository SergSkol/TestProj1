// https://www.hackerrank.com/challenges/one-week-preparation-kit-diagonal-difference/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-two
//
// * The function is expected to return an INTEGER.
// * The function accepts 2D_INTEGER_ARRAY arr as parameter.
// */

function diagonalDifference(arr) {
  let dia1 = 0;
  let dia2 = 0;
  const len = arr.length;
  for (let i = 0; i < len; i += 1) {
    dia1 += arr[i][i];
    dia2 += arr[len-1-i][i];
  }
  return Math.abs(dia1 - dia2);
}

const arr = [
  [1,2,3],
  [4,5,6],
  [9,8,9]
];

console.log(diagonalDifference(arr));
