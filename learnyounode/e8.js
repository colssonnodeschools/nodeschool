const http = require('http');
http.get(
  process.argv[2],
  (response) => {
    response.setEncoding('utf8');
    let whole = '';
    response.on(
      'data',
      (chunk) => {
        whole += chunk;
      }
    );
    response.on(
      'end',
      () => {
        console.log(whole.length);
        console.log(whole);
      }
    );
  }
);