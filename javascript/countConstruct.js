// Counts how many ways the word can be constructed with the word bank
const countConstruct = (target, wordBank, cache = {}) => {
  if (target in cache) return cache[target];
  if (target === "") return 1;
  let counter = 0;
  for (word of wordBank) {
    const regExp = new RegExp(`^${word}`, "i");
    const newTarget = target.replace(regExp, "");
    if (newTarget !== target)
      counter += countConstruct(newTarget, wordBank, cache);
  }
  cache[target] = counter;
  return cache[target];
};

console.log(
  countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee"
  ])
);
