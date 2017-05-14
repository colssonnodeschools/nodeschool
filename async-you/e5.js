const fs = require('fs');
const http = require('http')
const async = require('async');

const [hostname, port] = process.argv.slice(2);
const url = `http://${hostname}:${port}`;
const options = {
  port,
  hostname,
  method: 'POST',
  path: '/users/create',
};

// generate 5 users
async.series([
  (cb) => {
    async.times(5, function(n, next) {
      const req = http.request(options, (res) => {
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
        });
        res.on('end', () => {
          // cb(null, true);
          next();
        });
      });
      req.on('error', (e) => {
      });
      req.write(JSON.stringify({ 'user_id' : n + 1 }));
      req.end();
    }, function(err, users) {
        cb(null, true);
    });
  },
  (cb) => {
    fetchURL(url, (a, b) => console.log(b));
    cb(null, true);
  }
]);

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
