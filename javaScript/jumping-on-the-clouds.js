// https://www.hackerrank.com/challenges/jumping-on-the-clouds

function jumpingOnClouds(c) {
  // Write your code here
  let jumps = 0;
  const len = c.length - 1;
  let i = 0;
  while (i < len) {
      if (i == len - 1) {
          jumps += 1;
          i += 1;
      } else {
          if (c[i+2] == 0) {
              jumps += 1;
              i += 2;
          } else {
              jumps += 1;
              i += 1;
          }
      }
  }
  return jumps;
}

let c = [];

c = [0, 0, 1, 0, 0, 1, 0];
console.log(jumpingOnClouds(c));
