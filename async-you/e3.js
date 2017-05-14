const fs = require('fs');
const http = require('http')
const async = require('async');
async.each([process.argv[2], process.argv[3]], function(url, done){
  l
  // console.log(url);
  fetchURL(url, done);
},
function(err){
  if (err) console.log(err);
});


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
