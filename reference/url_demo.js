const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

// SERIALIZED URL
console.log(myUrl.href);
console.log(myUrl.toString());

// HOST (ROOT DOMAIN)
console.log(myUrl.host);

// HOSTNAME (does not get port)
console.log(myUrl.hostname);

// PATHNAME
console.log(myUrl.pathname);

// SERIALIZED QUERY
console.log(myUrl.search);

// PARAMS OBJECT
console.log(myUrl.searchParams);

// ADD PARAM
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

// LOOP THROUGH PARAMS
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));