var express = require('express');
var app = express();

app.listen(process.argv[2]);
app.use(require('stylus').middleware(process.argv[3]));
app.use(express.static(process.argv[3]));
