const e6Export = require('./e6Export.js');
e6Export(
  process.argv[2],
  process.argv[3],
  (err, data) => {
    if (err) {
      return;
    } else {
      data.forEach((x) => {
        console.log(x);
      });
    }
  }
);