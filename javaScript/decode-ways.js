/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  const in_range = (s) => {
      if (s[0]=='0') return false;
      const n = parseInt(s, 10);
      return (n > 0 && n <= 26);
  }

  const add_space = (res, s) => {
    const len = s.length;
    let newres = ''
    if (len == 1) {
      if (in_range(s)) {
        newres = res + ' ' + s;
        arr.push(newres.trim())
      }
    } else if (len == 2) {
      if (in_range(s)) {
        newres = res + ' ' + s;
        arr.push(newres.trim())
      }

      if (in_range(s.substring(0, 1))) {
        add_space(res + ' ' +s.substring(0, 1), s.substring(1));
      }
    } else {
      if (in_range(s.substring(0, 1))) {
        add_space(res + ' ' +s.substring(0, 1), s.substring(1));
      }
      if (in_range(s.substring(0, 2))) {
        add_space(res + ' ' +s.substring(0, 2), s.substring(2));
      }
    }
  }

  const arr = [];
  add_space('', s);

  console.log(arr);

  return arr.length;
}

const s = '111111111111111111111';
console.log(numDecodings(s))
