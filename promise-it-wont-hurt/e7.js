// const first = () => Promise.resolve('abc');
// const second = x => Promise.resolve('xyz');
first().then(second).then(console.log);
