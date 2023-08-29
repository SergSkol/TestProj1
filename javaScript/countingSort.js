// https://www.hackerrank.com/challenges/one-week-preparation-kit-countingsort1/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-two
//
// * The function is expected to return an INTEGER_ARRAY.
// * The function accepts INTEGER_ARRAY arr as parameter.
// */

function countingSort(arr) {
   const counts = new Array(100);
   counts.fill(0);
   for (let i = 0; i < arr.length; i += 1) {
      let key = arr[i];
      counts[key] = counts[key] + 1;
   }
   return counts;
}

const arr = [1,1,3,2,1];
console.log(countingSort(arr));
