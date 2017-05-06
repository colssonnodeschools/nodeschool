console.log(
	process.argv.slice(2).map(Number).reduce((x, y) => x + y, 0)
);
