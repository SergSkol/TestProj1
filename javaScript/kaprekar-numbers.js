//https://www.hackerrank.com/challenges/kaprekar-numbers/problem
/*
 * Complete the 'kaprekarNumbers' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER p
 *  2. INTEGER q
 */

function kaprekarNumbers(p, q) {
  const res = [];
  for (let i = p; i <= q; i += 1) {
    let arr = (i * i).toString().split("");
    let s = 0;
    for (let j = 0; j < arr.length; j += 1) {
      s += parseInt(arr[j]);
    }
    if (s == i) {
      res.push(i);
    }
  }
  return res.join(' ');
}

let p = 1;
let q = 100;
console.log(kaprekarNumbers(p, q));
