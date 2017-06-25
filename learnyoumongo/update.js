const mongo = require('mongodb').MongoClient;
const databaseName = process.argv.length > 2 && process.argv[2];
const url = `mongodb://localhost:27017/${databaseName}`;
mongo.connect(url, (err, db) => {
  if (err) {
    throw err;
  }
  db.collection('users')
  .update(
    { username: 'tinatime' },
    { $set: { age: 40 } },
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
  var collection = db.collection('users')
  collection.update({
    username: 'tinatime'
  }, {
    $set: {
      age: 40
    }
  }, function(err) {
    if (err) throw err
    db.close()
  })
})
*/
