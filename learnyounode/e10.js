const net = require('net');

const server = net.createServer((socket) => {
  const date = new Date();
  const f = x => x < 10 ? `0${x}` : `${x}`;
  socket.write(`${date.getFullYear()}-${f(date.getMonth() + 1)}-${f(date.getDate())} ${f(date.getHours())}:${f(date.getMinutes())}\n`);
  socket.end();
});
server.listen(process.argv[2]);