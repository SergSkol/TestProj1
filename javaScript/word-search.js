// https://leetcode.com/problems/word-search/
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  const onBoard = (n, m) => {
      if (n < 0 || n >= board.length || m < 0 || m >= board[0].length) {
          return false
      } else {
          return true
      }
  }

  const getIndex = (n, m) => {
    const index = n*board[0].length + m;
    return index;
  }

  const rec = (n, m, index, visited) => {
      
      if (onBoard(n, m)) {
          
          if (word[index] == board[n][m]) {
              if (index == word.length - 1) {
                  return true
              } else {
                  let result = false;
                  const incr = [-1, 0, 1, 0, -1];
                  for (let x=0; x<=3; x += 1) {
                      n1 = n + incr[x];
                      m1 = m + incr[x+1];
                      if (!visited.includes(getIndex(n1, m1))) {
                          if (onBoard(n1, m1)) {
                            if (board[n1][m1] == word[index+1]) {
                              visited.push(getIndex(n, m));
                            }


                            console.log(`n=${n1} m=${m1} l=${word[index+1]} cell=${board[n1][m1]} vis=${visited}`);


                            result = result || rec(n1, m1, index+1, visited);
                          }
                      }
                      
                  }
                  return result;
              }
          }
      }
  }

  for (let n=0; n < board.length; n += 1) {
      for (let m=0; m < board[0].length; m += 1) {
        console.log(`new start ${n} ${m}`);
          if (rec(n, m, 0, [])) {
              return true;
          }
      }
  }
  return false;
};

const arr = [["A","B","C","E"],["S","F","E","S"],["A","D","E","E"]];
console.log(exist(arr, 'ABCEFSADEESE'))