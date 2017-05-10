var concat = require('concat-stream');
process.stdin
  .pipe(
    concat(function (body) {
      let s = body.toString();
      process.stdout.write(s.split('').reverse().join(''));
    })
  )
