var express = require('express');
var fs = require('fs');
var app = express();

app.get('/books', function (req, res, next) {
  fs.readFile(
    process.argv[3],
    'utf8',
    (error, fileContents) => {
      if (error) {
        res.sendStatus(500);
      } else {
        let books = false;
        try {
          books = JSON.parse(fileContents);
        } catch (e) {
          res.sendStatus(500);
        }
        if (books !== false) {
          res.json(books);
        }
      }
    }
  );
})

app.listen(process.argv[2]);
