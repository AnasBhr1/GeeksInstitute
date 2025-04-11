// read-file.js
const fs = require('fs');

function readFile() {
  fs.readFile('./files/file-data.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
}

module.exports = readFile;
