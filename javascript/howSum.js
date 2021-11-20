// Show a set of values that can be used to sum
const howSum = (targetSum, numbers, cache = {}) => {
  if (targetSum in cache) return cache[targetSum];
  if (targetSum < 0) return null;
  if (targetSum === 0) return [];
  for (let number of numbers) {
    const result = howSum(targetSum - number, numbers, cache);
    if (result !== null) {
      cache[targetSum] = [...result, number];
      return cache[targetSum];
    }
  }
  cache[targetSum] = null;
  return cache[targetSum];
};

console.log(howSum(363, [7, 13]));
