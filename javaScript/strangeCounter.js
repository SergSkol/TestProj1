//https://www.hackerrank.com/challenges/strange-code/problem
//
// * The function is expected to return a LONG_INTEGER.
// * The function accepts LONG_INTEGER t as parameter.
// */

function strangeCounter(t) {
  const power = Math.floor(Math.log2((t+2)/3));
  const timeTo = (Math.pow(2, power + 1) -1 ) * 3;
  const counter = timeTo - t + 1;
  return counter;
}

for (let t=1;t<25;t+=1){
console.log(t+" "+strangeCounter(t));
}
