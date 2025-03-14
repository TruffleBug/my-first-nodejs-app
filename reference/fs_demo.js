const fs = require('fs');
const path = require('path');

// CREATE FOLDER
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if (err) throw err;
//     console.log('Folder created...')
// });

// CREATE AND WRITE TO FILE
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World! ', err => {
//     if (err) throw err;
//     console.log('File written to...');

//     // File append
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'I love Node.js', err => {
//         if (err) throw err;
//         console.log('File written to...');
//     });
// });

// READ FILE
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data)
// });

// RENAME FILE
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloworld.txt'), err => {
    if (err) throw err;
    console.log('File renamed...')
});