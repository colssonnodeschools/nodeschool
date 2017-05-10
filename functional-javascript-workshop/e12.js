function Spy(target, method) {
  const state = { count: 0 };
  const f = target[method];
  target[method] = (...args) => {
    state.count += 1;
    return f.call(target, ...args);
  };
  return state;
}

module.exports = Spy
