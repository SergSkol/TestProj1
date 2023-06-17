//https://www.hackerrank.com/challenges/chocolate-feast/problem
// *
// * The function is expected to return an INTEGER.
// * The function accepts following parameters:
// *  1. INTEGER n
// *  2. INTEGER c
// *  3. INTEGER m
// */

function chocolateFeast(n, c, m) {
  let eaten = 0;
  let wrappers = 0;
  let bars = 0;
  
  eaten += Math.floor(n / c);
  wrappers += eaten;

  while (wrappers >= m) {
    // console.log(`eaten ${eaten} wrap ${wrappers}`)
    
    bars = Math.floor(wrappers / m);
    wrappers -= bars * m;
    eaten += bars;
    wrappers += bars;
  }

  return eaten;
}

let n = 15;
let c = 3;
let m = 2;

console.log(chocolateFeast(n, c, m));
