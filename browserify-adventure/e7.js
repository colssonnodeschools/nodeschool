const fs = require('fs');
const sprintf = require('sprintf');
const input = fs.readFileSync(
  '/home/christian/.nvm/versions/node/v6.10.3/lib/node_modules/browserify-adventure/problems/using_transforms/wake.txt',
  'utf8'
);
const output = input
.split('\n')
.map((line, i) => (i % 5 === 0) ? sprintf("%3d %s", i, line) : sprintf("    %s", line))
.join('\n');

console.log(output);
