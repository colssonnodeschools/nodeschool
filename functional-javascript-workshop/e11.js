module.exports = function arrayMap(arr, fn) {
  return arr.reduce((acc, x) => [...acc, fn(x)], []);
};
