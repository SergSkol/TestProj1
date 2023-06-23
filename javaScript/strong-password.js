// https://www.hackerrank.com/challenges/strong-password/problem
//
// * The function is expected to return an INTEGER.
// * The function accepts following parameters:
// *  1. INTEGER n
// *  2. STRING password
// */

function minimumNumber(n, password) {
  // Return the minimum number of characters to make the password strong
  const containsAtLeastOne = (s, inStr) => {
    for (let i = 0; i < s.length; i += 1) {
      if (inStr.includes(s[i])) {
        return true;
      }
    }
    return false;
  }

  const numbers = "0123456789";
  const lower_case = "abcdefghijklmnopqrstuvwxyz";
  const upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const special_characters = "!@#$%^&*()-+";

  let addChars = 0;
  if (!containsAtLeastOne(password, numbers)) {
    addChars += 1;
  }
  if (!containsAtLeastOne(password, lower_case)) {
    addChars += 1;
  }
  if (!containsAtLeastOne(password, upper_case)) {
    addChars += 1;
  }
  if (!containsAtLeastOne(password, special_characters)) {
    addChars += 1;
  }
  const newLen = n + addChars;
  if (newLen < 6) {
    return 6 - n
  } else {
    return addChars
  }
}

let password = "2bb#A";
let n = password.length;
console.log(minimumNumber(n, password));
