// https://www.hackerrank.com/challenges/one-week-preparation-kit-mini-max-sum/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-one
//
// The function accepts INTEGER_ARRAY arr as parameter.

function miniMaxSum(arr) {
    // Write your code here
    arr.sort((a, b) => a - b);
    let minSum = 0;
    for (let i = 0; i < arr.length - 1; i += 1) {
        minSum += arr[i];
    }
    let maxSum = 0;
    for (let i = 1; i < arr.length; i += 1) {
        maxSum += arr[i];
    }
    console.log(minSum+' '+maxSum)
}

const arr = [1, 2, 3, 4, 5];
miniMaxSum(arr);
