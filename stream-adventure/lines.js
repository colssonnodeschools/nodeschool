const through2 = require('through2');
const split = require('split');
var count = 0;
process.stdin
  .pipe(split())
  .pipe(through2(function (line, _, next) {
    count += 1;
    const input = line.toString();
    this.push((count % 2 !== 0 ? input.toLowerCase() : input.toUpperCase()) + '\n');
    next();
  },
  function (done) {
    done();
  })).pipe(process.stdout);


  // const through2 = require('through2');
  // process.stdin
  //   .pipe(
  //     through2(
  //       function (buffer, encoding, next) {
  //         this.push(buffer.toString().toUpperCase());
  //         next();
  //       },
  //       function (done) {
  //         done();
  //       }
  //     )
  //   )
  //   .pipe(process.stdout);
