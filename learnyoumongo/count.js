const mongo = require('mongodb').MongoClient;
const inputAge = process.argv.length > 2 ? parseInt(process.argv[2]) : 0;
const url = 'mongodb://localhost:27017/learnyoumongo';
mongo.connect(url, (err, db) => {
  if (err) {
    throw err;
  }
  db.collection('parrots')
  .count(
    { age: { $gt: inputAge } },
    (err, count) => {
      if (err) {
        throw err;
      }
      console.log(count);
    }
  );
  db.close();
});

/*
var mongo = require('mongodb').MongoClient
    var age = process.argv[2]

    var url = 'mongodb://localhost:27017/learnyoumongo'

    mongo.connect(url, function(err, db) {
      if (err) throw err
      var parrots = db.collection('parrots')
      parrots.count({
        age: {
          $gt: +age
        }
      }, function(err, count) {
        if (err) throw err
        console.log(count)
        db.close()
      })
    })


*/
