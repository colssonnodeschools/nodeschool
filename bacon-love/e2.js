module.exports = (Bacon, promise, eventTarget, callback) => {
  return {
    promise: Bacon.fromPromise(promise),     // return your promise implementation here
    eventTarget: Bacon.fromEvent(eventTarget, 'data'), // return your eventTarget implementation here
    callback: Bacon.fromCallback(callback, 'foo', 'bar'),    // return your callback implementation here
    array: Bacon.fromArray([1, 2, 3, 4])        // return your array implementation here
  };
};
