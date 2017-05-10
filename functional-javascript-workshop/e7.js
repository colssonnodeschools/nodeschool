function reduce(arr, fn, initial) {
  const f = (acc, l) => (l.length === 0) ? acc : f(fn(acc, l[0]), l.slice(1));
  return f(initial, arr);
}

module.exports = reduce
