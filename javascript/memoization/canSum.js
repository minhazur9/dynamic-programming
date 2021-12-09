// Check if any numbers from given array sums to target sum

const canSum = (targetSum, numbers, cache = {}) => {
  if (targetSum in cache || targetSum < 0) return false;
  if (targetSum === 0) return true;
  for (number of numbers) {
    if (canSum(targetSum - number, numbers, cache) === true) return true;
  }
  cache[targetSum] = false;
  return cache[targetSum];
};

console.log(canSum(7, [5, 3, 4, 7]));
