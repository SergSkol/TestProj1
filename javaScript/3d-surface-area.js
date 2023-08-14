// https://www.hackerrank.com/challenges/3d-surface-area/problem
// * The function is expected to return an INTEGER.
//  * The function accepts 2D_INTEGER_ARRAY A as parameter.
function surfaceArea(A) {
  // calculate positive difference between two arrays, 
  // a2 = [0,1,2] and a1 = [1,1,1], dif = (0-1) + (1-1) + (2-1) = 1 
  const utilDif = (a1, a2) => {
    let dif = 0;
    for (let i = 0; i < a1.length; i += 1) {
      dif += Math.max(0, a2[i] - a1[i]);
    }
    return dif;
  }
  // go by matrix top to down
  const utilLayers = (matrix) => {
    let h = matrix.length;
    let w = matrix[0].length;
    let surface = 0;
    let a1 = [];
    let a2 = [];
    // zero layer
    for (let i = 0; i < w; i += 1) {
      surface += matrix[0][i];
    }
    // rest layers
    for (let i = 0; i < h - 1; i += 1) {
      for (let j = 0; j < w; j += 1) {
        a1.push(matrix[i][j]);
        a2.push(matrix[i+1][j]);
      }
      surface += utilDif(a1, a2);
      a1 = [];
      a2 = [];
    }
    return surface;
  }

  // rotate matrix m clockwise
  const utilRotate = (m) => {
    let n = [];
    let h = m.length;
    let w = m[0].length;
    for (let i = 0; i < w; i++) {
      n.push(new Array(h).fill(0));
    }

    for (let i = 0; i < h; i += 1) {
      for (let j = 0; j < w; j += 1) {
        n[j][h-1-i] = m[i][j];
      }
    }
    return n;
  }

  let h = A.length;
  let w = A[0].length;
  let surface = 0;

  // rotate matrix 3 times
  let matrix;
  surface += utilLayers(A);
  matrix = utilRotate(A);

  for (let r = 0; r < 3; r += 1) {
    surface += utilLayers(matrix);
    matrix = utilRotate(matrix);
  }

  // add top and bottom areas
  surface += 2 * h * w;
  return surface;
}

// let A = [[1,3,4], [2,2,3], [1,2,4]];
// let A = [[1]];
let A = [[91, 80, 7, 41, 36, 11, 48, 57, 40, 43]];
console.log(surfaceArea(A));
