var spawn = require('child_process').spawn;
var duplexer2 = require("duplexer2");
module.exports = function (cmd, args) {
  const spawnA = spawn(cmd, args);
  return duplexer2(spawnA.stdin, spawnA.stdout);
  // spawn the process and return a single stream
  // joining together the stdin and stdout here
};
