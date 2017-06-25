const url = require('url');
const querystring = require('querystring');

const link = prompt();
const linkComponents = url.parse(link);
console.log(
  url.resolve(
    // `${linkComponents.protocol}//${linkComponents.hostname}${linkComponents.pathname}`,
    link,
    querystring.parse(linkComponents.query).file
  )
);
