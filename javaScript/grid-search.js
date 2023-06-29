// https://www.hackerrank.com/challenges/the-grid-search/problem
//
// * The function is expected to return a STRING.
// * The function accepts following parameters:
// *  1. STRING_ARRAY G
// *  2. STRING_ARRAY P
// */

function gridSearch(G, P) {
  let res = "NO";
  let patternLen = P[0].length;
  for (let i = 0; i < G.length; i += 1) {
    let firstOcc = -1;
    let tmpG = G[i];
    
    do {
      firstOcc = tmpG.indexOf(P[0]);
      if (firstOcc !== -1) {
        res = "YES";
        
        for (let j = 1; j < P.length; j += 1) {
          let substr = G[i+j].slice(firstOcc, firstOcc + patternLen);
          if (substr !== P[j]) {
            res = "NO";
            break;
          }
        }
        tmpG = G[i].slice(firstOcc + patternLen);
      }
    } while (firstOcc != -1)
    if (res == "YES") {
      return "YES";
    }
  }
  return "NO";
}

let G = ['1234567890', '0987654321', '1111111111', '1111111111', '2222222222'];
let P = ['876543', '111111', '111111'];
console.log(gridSearch(G, P));
