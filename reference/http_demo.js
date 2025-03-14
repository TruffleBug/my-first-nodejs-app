const http = require('http');

// CREATE SERVER OBJECT
http.createServer((req, res) => {
    // WRITE RESPONSE
    res.write('Hello World');
    res.end();
}).listen(5000, () => console.log('Server running...'));