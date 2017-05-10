var http = require('http');
var through = require('through2');
var server = http.createServer(function (req, res) {
   if (req.method === 'POST') {
     req.pipe(
       through(
         function write(buf, _, next) {
           this.push(buf.toString().toUpperCase());
           next();
         },
         function end(done) {
           done();
         }
       )
     ).pipe(res);
   }
  //  res.end('beep boop\n');
 });
 server.listen(process.argv[2]);
