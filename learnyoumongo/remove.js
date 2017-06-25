const mongo = require('mongodb').MongoClient;
const databaseName = process.argv.length > 2 && process.argv[2];
const collectionName = process.argv.length > 3 && process.argv[3];
const _id = process.argv.length > 4 && process.argv[4];
const url = `mongodb://localhost:27017/${databaseName}`;
mongo.connect(url, (err, db) => {
  if (err) {
    throw err;
  }
  db.collection(collectionName)
  .remove(
    { _id },
    (err, data) => {
      if (err) {
        throw err;
      }
    }
  );
  db.close();
});

/*
var mongo = require('mongodb').MongoClient

var url = 'mongodb://localhost:27017/' + process.argv[2]

mongo.connect(url, function(err, db) {
  if (err) throw err
  var collection = db.collection(process.argv[3])
  collection.remove({
    _id: process.argv[4]
  }, function(err) {
    if (err) throw err
    db.close()
  })
})

*/
