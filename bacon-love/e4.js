// Export method as a module.
module.exports = (Bacon) => {
  const bus = new Bacon.Bus();
  let i = 0;
  const f = (words = ['Bacon', 'is', 'delicious']) => {
    // console.log(words);
    if (words.length === 0) {
      console.log('end');
      bus.end();
    } else {
      console.log(words[0]);
      bus.push(words[0]);
      i++;
      setTimeout(
        () => {
          f(words.slice(1));
        },
        100 + 100 * i
      );
    }
  };
  setTimeout(f, 1000);
  return bus;
};
