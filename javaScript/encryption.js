// https://www.hackerrank.com/challenges/encryption/problem
//
// * The function is expected to return a STRING.
// * The function accepts STRING s as parameter.
// */

function encryption(s) {
  const str = s.replace(/\s/g, '').toLowerCase();
  const len = str.length;
  const root = Math.sqrt(len);
  let rows = Math.floor(root);
  let columns = rows;
  if (rows * columns < len) {
    columns += 1;
  }
  if (rows * columns < len) {
    rows += 1;
  }
  
  let res = "";
  for (let c = 0; c < columns; c += 1) {
    for (let r = 0; r < rows; r += 1) {
      let index = c + columns * r;
      if (index < len) {
        res += str[index];
      }
      // console.log(index);
    }
    res += " ";
  }
  // console.log(`len ${len}, rows ${rows}, cols ${columns}`);
  return res;
}

// let s = "have a nice day";
// let s = "feedthedog";
// let s = "chillout";
let s = "iffactsdontfittotheorychangethefacts";
console.log(encryption(s));
