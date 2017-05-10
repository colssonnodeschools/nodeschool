var slice = Array.prototype.slice
function logger(namespace) {
  return (...args) => {
    console.log(...[namespace, ...args]);
  };
}

module.exports = logger
