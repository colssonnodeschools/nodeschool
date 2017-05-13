function repeat(operation, num) {
  // Modify this so it doesn't cause a stack overflow!
  return () => {
    num -= 1;
    operation();
    return num > 0;
  }
}

function trampoline(fn) {
  while (fn()) {

  }
}

module.exports = function(operation, num) {
  // You probably want to call your trampoline here!
  trampoline(repeat(operation, num));
}
