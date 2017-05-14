const http = require('http')
const async = require('async');
let prev = false;
let n = 0;
async.whilst(
  () => prev !== 'meerkat',
  (cb) => {
    n += 1;
    fetchURL(
      process.argv[2],
      (e, y) => {
        prev = y;
        cb();
      }
    );
  },
  (a, b) => {
    console.log(n);
  }
);

function fetchURL(url, done) {
  var body = '';
  http.get(url, function(res){
    res.on('data', function(chunk){
      body += chunk.toString();
    });

    res.on('end', function(chunk){
      done(null, body);
    });
  }).on('error', function(e){
    done(e);
  });
}
