const assert = require('assert');
var f = require(process.argv[2]);
assert.deepEqual(f(42), true);
