function duckCount() {
  let n = 0;
  let i = 0;
  while (i < arguments.length) {
    n += Object.prototype.hasOwnProperty.call(arguments[i], 'quack') ? 1 : 0;
    i += 1;
  }
  return n;
}

module.exports = duckCount;
