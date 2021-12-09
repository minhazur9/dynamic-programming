// Check if target can be constructed with given word bank
const canConstruct = (target, wordBank, cache = {}) => {
  if (target in cache) return cache[target];
  if (target === "") return true;
  for (word of wordBank) {
    const regExp = new RegExp(`^${word}`, "i");
    const newTarget = target.replace(regExp, "");
    if (newTarget !== target) {
      const result = canConstruct(newTarget, wordBank, cache);
      if (result === true) return true;
    }
  }
  cache[target] = false;
  return cache[target];
};

console.log(
  canConstruct("eeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeeee"
  ])
);
