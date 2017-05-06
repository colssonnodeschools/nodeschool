const http = require('http');
const collect = (url, resultListener) => {
  http.get(
    url,
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
          resultListener(whole);
        }
      );
    }
  );
};
  
const urls = process.argv.slice(2);
const results = {};
const createResultListener = (index) => (result) => {
  results[index] = result;
  let j = 0;
  while (j < urls.length && results.hasOwnProperty(j.toString())) {
    j += 1;
  }
  if (j === urls.length) {
    j = 0;
    while (j < urls.length) {
      console.log(results[j.toString()]);
      j += 1;
    }
  }
}
for (let i = 0; i < urls.length; i++) {
  collect(urls[i], createResultListener(i.toString()));
}