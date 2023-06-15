//https://www.hackerrank.com/challenges/beautiful-triplets/problem
//  *
//  * The function is expected to return an INTEGER.
//  * The function accepts following parameters:
//  *  1. INTEGER d
//  *  2. INTEGER_ARRAY arr
//  */

function beautifulTriplets(d, arr) {
    const len = arr.length;
    let count = 0;
    for (let i = 0; i < len; i += 1) {
        if (arr.includes(arr[i] + d) && arr.includes(arr[i] + d + d)) {
        count += 1;
        }
    }
    return count;
}

 let d = 0;
 let arr = [];

 d = 3;
 arr = [1,2,4,5,7,8,10];

 console.log(beautifulTriplets(d, arr))