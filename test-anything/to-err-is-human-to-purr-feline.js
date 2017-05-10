var test = require('tape');
var f = require(process.argv[2]);
const n = 4;
test(
  'f',
  (t) => {
    t.equal(f('cat'), 'yum');
    // t.throws(() => {
    //   f('chocolate');
    // });
    t.throws(f.bind(null, 'chocolate'))
    t.end();
  }
);
