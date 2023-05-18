const diff = (arr1, arr2) => {
  const res = []
  for (let i=0; i<arr1.length;i+=1) {
      if (!arr2.includes(arr1[i])) {
          res.push(arr1[i])
      }
  }
  
  for (let i=0; i<arr2.length;i+=1) {
      if (!arr1.includes(arr2[i])) {
          res.push(arr2[i])
      }
  }
  
  return res;
}

const a1 = [1, 2, 3, 4];
const a2 = [2, 3, 5, 6];
console.log(diff(a1, a2));
