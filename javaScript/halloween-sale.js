//https://www.hackerrank.com/challenges/halloween-sale/problem
// *
//  * The function is expected to return an INTEGER.
//  * The function accepts following parameters:
//  *  1. INTEGER p
//  *  2. INTEGER d
//  *  3. INTEGER m
//  *  4. INTEGER s
//  */

function howManyGames(p, d, m, s) {
    let count = 0;
    let rest = s;
    let price = p;
    while (rest > 0) {
      if (rest >= price) {
        // console.log(`rest ${rest} price ${price}`)
        count += 1;
        rest -= price;
        if (price > m) {
          price = Math.max(m, price - d);
        }
      } else {
        rest = 0;
      }
    }

    return count;
}

let p = 0;
let d = 0;
let m = 0;
let s = 0;

p = 20;
d = 3;
m = 6;
s = 80;

console.log(howManyGames(p, d, m, s));
