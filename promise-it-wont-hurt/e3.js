'use strict';

var promise = new Promise(function (fulfill, reject) {
  // Your solution here
  setTimeout(function () {
    reject(new Error('REJECTED!'));
  }, 300);
});
promise.then(null, (e) => {console.log(e.message);});
// Your solution here
