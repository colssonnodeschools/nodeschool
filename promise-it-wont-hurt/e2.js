'use strict';

var promise = new Promise(function (fulfill, reject) {
  // Your solution here
  setTimeout(function () {
    fulfill('FULFILLED!');
  }, 300);
});
promise.then(console.log);
// Your solution here
