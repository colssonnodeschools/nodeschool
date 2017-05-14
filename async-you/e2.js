const fs = require('fs');
const http = require('http')
const async = require('async');

async.series({
  requestOne: function(done){
    let body = '';
    http.get(process.argv[2], function(res){
      res.on('data', function(chunk){
        body += chunk.toString();
      });
      res.on('end', function(){
        done(null, body);
      });
    }).on('error', function(err) {
      done(err);
    });
  },
  requestTwo: function(done){
    let body = '';
    http.get(process.argv[3], function(res){
      res.on('data', function(chunk){
        body += chunk.toString();
      });
      res.on('end', function(){
        done(null, body);
      });
    }).on('error', function(err) {
      done(err);
    });
  }
}, function(err, results){
  console.log(results);
  // results will be {one: 1, two: 2}
});

/*
var http = require('http')
      , async = require('async');

    async.series({
      requestOne: function(done){
        fetchURL(process.argv[2], done);
      },
      requestTwo: function(done){
        fetchURL(process.argv[3], done);
      }
    },
    function done(err, result){
      if (err) return console.error(err);
      console.log(result);
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
*/
