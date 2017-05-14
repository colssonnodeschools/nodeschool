const promise = new Promise((resolve, reject) => {
  resolve('PROMISE VALUE');
  reject(new Error('I DID NOT FIRE'));
});
promise.then(console.log, (e) => {console.log(e.message);});
console.log('MAIN PROGRAM');
