function generateCombinations(n) {
  const results = [];

  function backtrack(currentCombination, remainingLength) {
    if (remainingLength === 0) {
      results.push(currentCombination.join(''));
      return;
    }

    for (let digit = 0; digit <= 9; digit++) {
      currentCombination.push(digit);
      backtrack(currentCombination, remainingLength - 1);
      currentCombination.pop();
    }
  }

  backtrack([], n);

  return results;
}

// Example usage:
const n = 7; // Change n to the desired length
const combinations = generateCombinations(n);
console.log(combinations.length);