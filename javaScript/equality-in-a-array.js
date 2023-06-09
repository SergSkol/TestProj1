// https://www.hackerrank.com/challenges/equality-in-a-array

function equalizeArray(arr) {
  // Write your code here
  const map = new Map();

  for (let i = 0; i < arr.length; i += 1) {
    if (map.has(arr[i])) {
      let prev = map.get(arr[i]);
      map.set(arr[i], prev += 1);
    } else {
      map.set(arr[i], 1);
    }
  }

  let maxKey = 0;
  let maxValue = 0;
  for (let [key, value] of map) {
    if (value > maxValue) {
      maxKey = key;
      maxValue = value;
    }
  }

  return arr.length - maxValue;
}

let arr = [];

arr = [3, 3, 2, 1, 3];
console.log(equalizeArray(arr));
