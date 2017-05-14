function all(a, b) {
  return new Promise(function(resolve, reject) {
    let aa;
    let bb;
    let c = 0;
    a.then(x => {
      aa = x;
      c++;
      if (c === 2) {
        resolve([aa, bb]);
      }
    });
    b.then(x => {
      bb = x;
      c++;
      if (c === 2) {
        resolve([aa, bb]);
      }
    });
  });
}

all(getPromise1(), getPromise2()).then(console.log);
