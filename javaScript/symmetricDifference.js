function symmetricDifference(arr1, arr2) {
  const result = [];

  arr1.filter((item) => !arr2.includes(item)).forEach((item) => result.push(item));
  arr2.filter((item) => !arr1.includes(item)).forEach((item) => result.push(item));

  return result;
}

const arr1 = [1, 2, 3, 4];
const arr2 = [2, 4, 6, 8];

const result = symmetricDifference(arr1, arr2);
console.log(result); // [1, 3, 6, 8]