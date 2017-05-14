var HTTP = require("q-io/http");
HTTP.read('http://localhost:7000')
.then(userID => HTTP.read(`http://localhost:7001/${userID}`))
.then(JSON.parse)
.then(console.log);
