const through2 = require('through2');
process.stdin
  .pipe(
    through2(
      function (buffer, encoding, next) {
        this.push(buffer.toString().toUpperCase());
        next();
      },
      function (done) {
        done();
      }
    )
  )
  .pipe(process.stdout);
