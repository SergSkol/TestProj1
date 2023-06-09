// https://leetcode.com/problems/number-of-islands/

function getNumberOfIslands(binaryMatrix) {
  const matrix_x = binaryMatrix.length;
  const matrix_y = binaryMatrix[0].length;
  const arr = Array.from(Array(matrix_x), () => new Array(matrix_y))

  const colorize = (x, y, currColor) => {
    if (binaryMatrix[x][y] === 0) {
      return;
    };
    if (!arr[x][y]) {
      arr[x][y] = currColor;
      if (x > 0) colorize(x-1,y,currColor)
      if (x < matrix_x - 1) colorize(x+1,y,currColor)
      if (y > 0) colorize(x,y-1,currColor)
      if (y < matrix_y - 1) colorize(x,y+1,currColor)
      return;
    }
  }

  let currColor = 0;
  for (let x = 0; x < binaryMatrix.length; x += 1) {
    for (let y = 0; y < binaryMatrix[x].length; y += 1) {
      let item = binaryMatrix[x][y];

      if (item === 1 && !arr[x][y]) {
        currColor += 1;
        colorize(x,y,currColor)       
      }
    }
  }

  const printColors = 0;
  if (printColors) {
    for (let i=0;i<arr.length;i++){
      let row ="";
      for (let j=0;j<arr[i].length;j++) {
        row += arr[i][j] || 0;
        row +=" "
      }
      console.log(row)
    }
  }
  

  return currColor;
}

const a = [
  [0,1,0,1,0], 
  [0,0,1,1,1], 
  [1,0,0,1,0],
  [0,1,1,0,0],
  [1,0,1,0,1],
];
console.log(getNumberOfIslands(a))