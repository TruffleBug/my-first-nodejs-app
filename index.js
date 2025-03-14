const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // VERY INEFFICIENT
    // if(req.url === '/') {
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
    //         if (err) throw err;
    //         res.writeHead(200, { 'Content-Type': 'text/html' });
    //         res.end(content);
    //     });
    // };

    // if(req.url === '/about') {
    //     fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
    //         if (err) throw err;
    //         res.writeHead(200, { 'Content-Type': 'text/html' });
    //         res.end(content);
    //     });
    // };

    // if(req.url === '/api/users') {
    //     const users = [
    //         { name: 'Bob Smith', age: 40 },
    //         { name: 'John Doe', age: 30 }
    //     ];
    //     res.writeHead(200, { 'Content-Type': 'application/json' });
    //     res.end(JSON.stringify(users));
    // };

    // BUILD FILE PATH
    let filePath = path.join(__dirname, 'public', 
        req.url === '/' ? 'index.html' : req.url);

    // EXTENSION OF FILE
    let extname = path.extname(filePath);

    //INITIAL CONTENT TYPE
    let contentType = 'text/html';

    // CHECK EXT AND SET CONTENT TYPE
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    };

    // CHECK IF CONTENTTYPE IS TEXT/HTML BUT NO .HTML FILE EXTENSION
    if (contentType == "text/html" && extname == "") filePath += ".html";

    // READ FILE
    fs.readFile(filePath, (err, content) => {
        if(err) {
            if(err.code == 'ENOENT') {
                // PAGE NOT FOUND
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    res.end(content, 'utf8');
                });
            } else {
                // SOME SERVER ERROR
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            // SUCCESS
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf8');
        }
    });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));