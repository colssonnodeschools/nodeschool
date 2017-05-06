const fs = require('fs');
const fileEnding = `.${process.argv[3]}`;
const f = (err, list) => {
	if (!err) {
		list.filter(filename => filename.endsWith(fileEnding)).forEach(x => console.log(x));
	}
};
fs.readdir(process.argv[2], 'utf8', f);
