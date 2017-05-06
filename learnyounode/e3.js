const fs = require('fs');
let n = 0;
let startPosition = 0;
const string = fs.readFileSync(process.argv[2], 'utf8');
const needle = '\n';
while (string.includes(needle, startPosition)) {
	n += 1;
	startPosition = string.indexOf(needle) + 1;
}
console.log(n);
