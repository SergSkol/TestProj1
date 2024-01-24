function allPossibleCombinations(input, length, curstr) {
    if(curstr.length == length) return [ curstr ];
    var ret = [];
    for(var i = 0; i < input.length; i++) {
        ret.push.apply(ret, allPossibleCombinations(input, length, curstr + input[i]));
    }
    return ret;
}

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const combinations = allPossibleCombinations(alphabet, 3, '');
  const countComb = combinations.length;

  console.log('Found: ',countComb)
  console.log(combinations);
  