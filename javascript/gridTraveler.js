// Calculate amount of paths across both corners of a rectangle

const gridTraveler = (m, n, cache = {}) => {
  const key = m + "," + n;
  if (key in cache) return cache[key];
  if (m === 0 || n === 0) return 0;
  if (m === 1 || n === 1) return 1;
  cache[key] = gridTraveler(m - 1, n, cache) + gridTraveler(m, n - 1, cache);
  return cache[key];
};

console.log(gridTraveler(20, 20));
