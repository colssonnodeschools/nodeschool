const http = require('http');
const through2Map = require('through2-map')
const url = require('url');

const server = http.createServer((request, response) => {
  const { pathname, query: { iso } } = url.parse(request.url, true);
  const date = new Date(iso);
  response.writeHead(200, { 'Content-Type': 'application/json' })  
  response.write(
    JSON.stringify(
      pathname.includes('parsetime')
        ? { hour: date.getHours(), minute: date.getMinutes(), second: date.getSeconds() }
        : { unixtime: date.getTime() }
    )
  );
  response.end();
});
server.listen(Number(process.argv[2]));
