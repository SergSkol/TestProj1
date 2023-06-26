// https://www.hackerrank.com/challenges/reduced-string/problem
//
// * The function is expected to return a STRING.
// * The function accepts STRING s as parameter.
// */

function superReducedString(s) {
  let wasDeleted = false;
   do {
    wasDeleted = false;
    for (let i = 0; i < s.length - 1; i += 1) {
      if (s[i] == s[i+1]) {
        s = s.slice(0, i) + s.slice(i+2);
        wasDeleted = true;
        break;
      }
    }
   } while (wasDeleted);
   if (s =="") {
    return "Empty String"
   } else {
    return s;
   }
}

console.log(superReducedString("aaabccddd"));
