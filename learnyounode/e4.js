const fs = require('fs');
const f = (err, string) => {
	if (!err) {
		let n = 0;
		let startPosition = 0;
		const needle = '\n';
		while (startPosition < string.length && string.includes(needle, startPosition)) {
			n += 1;
			startPosition = string.indexOf(needle, startPosition) + 1;
		}
		console.log(n);
	}
};
fs.readFile(process.argv[2], 'utf8', f);
