const mongo = require('mongodb').MongoClient;
const inputAge = process.argv.length > 2 && parseInt(process.argv[2]);
const url = 'mongodb://localhost:27017/learnyoumongo';
mongo.connect(url, (err, db) => {
  // db gives access to the database
  db.collection('parrots')
  .find({})
  .toArray((err, documents) => {
    console.log(documents.filter(({ age }) => age > inputAge));
  });
  db.close();
});

/*
var mongo = require('mongodb').MongoClient
 var age = process.argv[2]

 var url = 'mongodb://localhost:27017/learnyoumongo'

 mongo.connect(url, function(err, db) {
   if (err) throw err
   var parrots = db.collection('parrots')
   parrots.find({
     age: {
       $gt: +age
     }
   }).toArray(function(err, docs) {
     if (err) throw err
     console.log(docs)
     db.close()
   })
 })

*/