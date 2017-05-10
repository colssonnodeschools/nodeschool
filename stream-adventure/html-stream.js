

// Here's the reference solution:

  var trumpet = require('trumpet');
  var through = require('through2');
  var tr = trumpet();

  var loud = tr.select('.loud').createStream();
  loud.pipe(through(function (buf, _, next) {
      this.push(buf.toString().toUpperCase());
      next();
  })).pipe(loud);

  process.stdin.pipe(tr).pipe(process.stdout);


    // var tr = trumpet();
    // process.stdin.pipe(tr);
    // //
    // var stream = tr.select('.loud').createStream();
    // stream.pipe(
    //   through2(
    //     function (buffer, encoding, next) {
    //       this.push(buffer.toString().toUpperCase());
    //       next();
    //     },
    //     function (done) {
    //       done();
    //     }
    //   )
    // )
    // process.stdin.pipe(process.stdout);
    // process.stdin.pipe(
    //   through2(
    //     function (buffer, encoding, next) {
    //       this.push(buffer.toString().toUpperCase());
    //       next();
    //     },
    //     function (done) {
    //       done();
    //     }
    //   )
    // ).pipe(process.stdout);
    // stream.write(process.stdin);
    // stream.pipe(process.stdout);
