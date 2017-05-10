function countWords(inputWords) {
  return inputWords.reduce(
    (count, word) => {
      count[word] = count.hasOwnProperty(word) ? count[word] + 1 : 1;
      return count;
    },
    {}
  );
}

module.exports = countWords
