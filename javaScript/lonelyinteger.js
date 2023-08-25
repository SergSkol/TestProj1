//https://www.hackerrank.com/challenges/one-week-preparation-kit-lonely-integer/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-two
//
// * The function is expected to return an INTEGER.
// * The function accepts INTEGER_ARRAY a as parameter.
// */
function lonelyinteger(a) {
  const keyValues = {};

  for (const element of a) {
    const key = element;
    if (keyValues[key]) {
      keyValues[key] = keyValues[key] + 1;
    } else {
      keyValues[key] = 1;
    }
  }

  for (let key in keyValues) {
    if (keyValues[key] == 1) {
      return key;
    }
  }
}

const a = [1,2,3,4,3,2,1];
console.log(lonelyinteger(a));
