// Show the shortest combination of numbers to sum
const bestSum = (targetSum, numbers, cache = {}) => {
  if (targetSum in cache) return cache[targetSum];
  if (targetSum < 0) return null;
  if (targetSum === 0) return [];
  let currentBest = null;
  for (let number of numbers) {
    const result = bestSum(targetSum - number, numbers, cache);
    if (
      result !== null &&
      (currentBest === null || result.length < currentBest.length)
    )
      currentBest = [...result, number];
  }
  cache[targetSum] = currentBest;
  return cache[targetSum];
};

console.log(bestSum(100, [1, 2, 5, 25]));
