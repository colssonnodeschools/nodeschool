const fs = require('fs');
const http = require('http')
const async = require('async');
async.reduce(
  ['one', 'two', 'three'],
  0,
  (acc, x, callback) => {
    fetchURL(
      `${process.argv[2]}?number=${x}`,
      (e, y) => {
        callback(null, acc + Number.parseInt(y));
      }
    );
  },
  (a, b) => {
    console.log(b);
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
