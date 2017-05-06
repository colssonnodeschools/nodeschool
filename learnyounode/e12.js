const http = require('http');
const through2Map = require('through2-map')

const server = http.createServer((request, response) => {
  request.pipe(through2Map(chunk => chunk.toString().toUpperCase())).pipe(response)
});
server.listen(Number(process.argv[2]));
