// https://www.hackerrank.com/challenges/repeated-string

function repeatedString(s, n) {
  // Write your code here
  const a = s.split("a").length - 1;
  const len = s.length;
  const rest = n % len;
  let tail = 0;
  for (let i = 0; i < rest; i += 1) {
      if (s[i] == "a") {
          tail += 1;
      }
  }
  return (Math.floor(n / len) * a) + tail;
}

let s = "";
let n = 0;

s = "aba";
n = 10;

console.log(repeatedString(s, n));
