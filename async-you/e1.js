const fs = require('fs');
const http = require('http')
const async = require('async');


(new Promise(function(resolve, reject) {
  fs.readFile(process.argv[2], 'utf8', (err, data) => {
    resolve(data);
  })
}))
.then((fileContents) => {
  async.waterfall([
    function(cb){
      var body = '';
      http.get(fileContents, function(res){
        res.on('data', function(chunk){
          body += chunk.toString();
        });
        res.on('end', function(){
          cb(null, body);
        });
      }).on('error', function(err) {
        cb(err);
      });
    },
  ], function(err, result){
    if (err) return console.error(err);
    console.log(result);
  });
});


/*
var fs = require('fs')
      , http = require('http')
      , async = require('async');

    async.waterfall([
      function(done){
        fs.readFile(process.argv[2], function(err, data){
          if (err) return done(err);
          done(null, data)
        });
      },

      function(data, done){
        var body = '';
        http.get(data.toString().trimRight(), function(res){
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
    ], function done(err, result){
      if (err) return console.error(err);
      console.log(result);
    });

*/
