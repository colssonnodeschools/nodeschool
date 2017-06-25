const quoteStream = require('quote-stream');
const split = require('split2');
const sprintf = require('sprintf');
const streamCombiner = require('stream-combiner2')
const through = require('through2');

module.exports = function (filename) {
  if (!/\.txt$/.test(filename)) return through();
  let i = 0;
  const prefix = through();
  prefix.push('module.exports=');
  return streamCombiner(
    split(),
    through(function (line, encoding, callback) {
      this.push(((i % 5 === 0) ? sprintf("%3d %s", i, line) : sprintf("    %s", line)) + '\n');
      i += 1;
      callback();
    }),
    quoteStream(),
    prefix
  );
};
