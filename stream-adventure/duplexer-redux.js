var spawn = require('child_process').spawn;
var duplexer2 = require("duplexer2");
var stream = require("stream");

module.exports = function (counter) {
  console.log('abc');
    // return a duplex stream to count countries on the writable side
    // and pass through `counter` on the readable side
    var counts = {};
    var writable = new stream.Writable({objectMode: true}),
    readable = new stream.Readable({objectMode: true});
    readable._read = function _read(n) {
      // no-op
    };
    var duplex = duplexer2(writable, counter);
    duplex.on("data", function(e) {
      console.log('asadf');
      const o = e;
      const c = o.country;
      counts[c] = count.hasOwnProperty(c) ? (counts[c] + 1) : 1;
    });

    duplex.on("end", function() {
      console.log('asdfsdf');
      counter.setCounts(counts);
    });
    //
    // duplex.write("oh, hi there", function() {
    //   console.log("finished writing");
    // });
    console.log('asfsdf');
    return duplex;
};
