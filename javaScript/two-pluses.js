// https://www.hackerrank.com/challenges/two-pluses/problem

//  * The function is expected to return an INTEGER.
//  * The function accepts STRING_ARRAY grid as parameter, like ["GGBBG", "BBGGG"].
//  */

function twoPluses(grid) {
  const utilReplace = (s, p) => {
    if (p == 0) {
      return "+" + s.slice(1);
    }

    return s.slice(0, p) + "+" + s.slice(p+1);
  }

  let plus = [];

  const h = grid.length;
  const w = grid[0].length;

  if (h < 3 || w < 3) {
    return 0;
  }

  for (let i = 1; i < h-1; i += 1) {
    for (let j = 1; j < w-1; j += 1) {
      if (grid[i].at(j) == "G") {
        let step = 1;
        let found = false;
        let check = true;
        do {
          // check neighbor sells
          check = true;

          if (check && i-step >=0) {
            if (grid[i-step].at(j) !== "G") {
              check = false;
            }
          } else {check = false}
          if (check && i + step < h) {
            if (grid[i+step].at(j) !== "G") {
              check =  false;
            }
          } else {check = false}
          if (check && j - step >=0) {
            if (grid[i].at(j-step) !== "G") {
              check = false;
            }
          } else {check = false}
          if (check && j + step < w) {
            if (grid[i].at(j+step) !== "G") {
              check = false;
            }
          } else {check = false}

          if (check) {
            plus.push(5 + (step - 1) * 4);
            plus.sort(function(a, b){return b-a});

            found = true;
            step += 1;
          }
        } while (check)

        // set as + instead of G to avoid overlap
        if (found) {
          for (let s = 1; s < step; s += 1) {
            grid[i] = utilReplace(grid[i], j);
            grid[i] = utilReplace(grid[i], j-s);
            grid[i] = utilReplace(grid[i], j+s);
            grid[i-s] = utilReplace(grid[i-s], j);
            grid[i+s] = utilReplace(grid[i+s], j);
          }
        }
      }
    }
  }

  console.log(plus);

  if (plus.length == 0) {
    return 0
  }
  if (plus.length == 1) {
    return plus[0]
  } else {
    return plus[0] * plus[1]
  }
}

let grid = [
"GGGGGGGG",
"GBGBGGBG",
"GBGBGGBG",
"GGGGGGGG",
"GBGBGGBG",
"GGGGGGGG",
"GBGBGGBG",
"GGGGGGGG"];

console.log(twoPluses(grid));
console.log(grid);
