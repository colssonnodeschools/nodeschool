module.exports = (Bacon, asyncTask) => {
  return asyncTask.map(false).mapError(true).toProperty(false);
};
