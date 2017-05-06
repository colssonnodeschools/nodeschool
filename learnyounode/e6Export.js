const fs = require('fs');

module.exports = (dirname, extension, callback) => {
  const fileEnding = `.${extension}`;
	fs.readdir(
		dirname,
		'utf8',
		(err, list) => {
			if (!err) {
				callback(null, list.filter(filename => filename.endsWith(fileEnding)));
			} else {
        callback(err)
			}
		}
	);
};
