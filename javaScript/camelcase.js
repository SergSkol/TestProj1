// https://www.hackerrank.com/challenges/camelcase/problem

function camelcase(s) {
  // Write your code here
  const len = s.length;
  if (len==0) {
    return 0
  }
  let count = 1;
  for (let i = 0; i < len; i +=1) {
    if (s[i] == s[i].toUpperCase()) {
      count += 1;
    }
  }
  return count;
}

let s = '';

s = 'saveChangesInTheEditor';
console.log(camelcase(s));
