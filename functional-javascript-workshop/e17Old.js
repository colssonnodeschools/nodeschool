function curryN(fn, nParameter = -1) {
  // SOLUTION GOES HERE
  const args = [];
  const f = (n) => {
    if (n === 1) {
      return x => fn.apply(null, [...args, x]);
    }
    return x => {
      args.push(x);
      return f(n - 1)
    };
  }
  return f(nParameter !== -1 ? nParameter : fn.length);
}

module.exports = curryN
