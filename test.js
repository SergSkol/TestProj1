
var arr2d = [["a",1],["b",2],["c",3]];

var arr = arr2d.flat();

var i = arr.indexOf("c");
var res = arr[i+1];
console.log(res);