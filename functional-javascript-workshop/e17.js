function curryN(fn, nParameter = -1) {
  // SOLUTION GOES HERE
  const f = (args, n) => {
    if (n === 1) {
      return x => fn.apply(null, [...args, x]);
    }
    return x => f([...args, x], n - 1);
  }
  return f([], nParameter !== -1 ? nParameter : fn.length);
}

module.exports = curryN


/*
Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    function curryN(fn, n) {
      n = n || fn.length
      return function curriedN(arg) {
        if (n <= 1) return fn(arg)
        return curryN(fn.bind(this, arg), n - 1)
      }
    }

    module.exports = curryN

*/
