module.exports = (Bacon, clicks, startAsyncTask) => {
  return clicks.map(true).merge(startAsyncTask().map(false)).toProperty(false);
};
// return clicks
//   .flatMapFirst(click => {
//     const bus = new Bacon.Bus();
//     bus.push(true);
//     startAsyncTask().onEnd(() => {
//       bus.push(false);
//       bus.end();
//     });
//     return bus;
//   })
//   .toProperty(false);

/*
module.exports = (Bacon, clicks, startAsyncTask) => {
        const request = clicks.map(true);
        const response = request.flatMap(startAsyncTask);

        return request.awaiting(response);
    };

*/
