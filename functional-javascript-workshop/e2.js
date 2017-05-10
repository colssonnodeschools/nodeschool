function repeat(operation, num) {
  let i = 0;
  while (i < num) {
    operation();
    i += 1;
  }
}

module.exports = repeat
