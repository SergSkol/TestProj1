console.log(1, null + {0:1}[0] + [,[1],][1][0]);
console.log(2, true + false);

const arr = [3,5,6,2,9,3];
console.log(3, arr.reduce(function(prev, item) { return Math.max(prev, item) }));
console.log(4, Math.max.apply(null, arr));

let y = 1;
let x = y = 2;
console.log(5, x);
