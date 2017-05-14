const promise = Promise.reject(new Error('error!!!!'));
promise.catch((e) => {console.log(e.message);});
console.log('MAIN PROGRAM');
