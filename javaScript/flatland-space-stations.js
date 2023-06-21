//https://www.hackerrank.com/challenges/flatland-space-stations/problem

function flatlandSpaceStations(n, c) {
  const mediana = (c1, c2) => {
    return Math.floor((c2 - c1)/2);
  }

  const len = c.length;
  if (len == 0 || len == n) {
    return 0;
  }
  
  c.sort(function(a, b){return a - b});

  let maxDist = c[0];

  for (let i = 0; i < len-1; i += 1) {
      let dist = mediana(c[i], c[i+1]);
      maxDist = Math.max(maxDist, dist);
  }
  let dist = n - 1 - c[len - 1];
  maxDist = Math.max(maxDist, dist);
  return maxDist;
}

let n = 95;
let c = "68 81 46 54 30 11 19 23 22 12 38 91 48 75 26 86 29 83 62".split(" ");
console.log(flatlandSpaceStations(n, c));
