// https://www.hackerrank.com/challenges/bigger-is-greater/problem
//
// * The function is expected to return a STRING.
// * The function accepts STRING w as parameter.
// */

function biggerIsGreater(w) {
  const utilSwap = (str, i, j) => {
    const si = str[i];
    const sj = str[j];
    const left = str.substring(0, i) + sj;
    let rigth = str.substring(i+1, j) + si + str.substring(j+1);
    rigth = rigth.split("").sort().join('');

    return left + rigth;
  }

  const len = w.length;
  for (let i = len-2; i >= 0; i -= 1) {
    for (let j = len-1; j > i; j -= 1) {
      // console.log(`i=${i} j=${j}`)
      if (w[j] > w[i]) {
        return utilSwap(w, i, j)
      }
    }
  }
  return "no answer"
}

let w = "fedcbabcd";
console.log(biggerIsGreater(w));
