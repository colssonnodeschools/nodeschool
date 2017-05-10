var test = require('tape');
var f = require(process.argv[2]);
const n = 4;
test(
  'f',
  (t) => {
    t.plan(n);
    f(
      n,
      () => {
        t.pass('');
      }
    );
    t.end();
  }
);
