// List of all the ways to construct the target with the word bank
const allConstruct = (target, wordBank, cache = {}) => {
  if (target in cache) return cache[target];
  if (target === "") return [[]];
  const result = [];
  for (let word of wordBank) {
    const regExp = new RegExp(`^${word}`, "i");
    const newTarget = target.replace(regExp, "");
    if (newTarget !== target) {
      const combinations = allConstruct(newTarget, wordBank, cache);
      const newCombinations = combinations.map((combination) => [
        word,
        ...combination
      ]);
      result.push(...newCombinations);
    }
  }
  cache[target] = result;
  return cache[target];
};

console.log(
  allConstruct("aaaaaaaaaaaaaaaaaaaaaaaaaaaz", [
    "a",
    "aa",
    "aaa",
    "aaaa",
    "aaaaa",
    "aaaaaaa"
  ])
);
