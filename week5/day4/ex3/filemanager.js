// fileManager.js
const fs = require('fs');

// Read file function
function readFile(filePath, callback) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) return callback(err);
    callback(null, data);
  });
}

// Write file function
function writeFile(filePath, content, callback) {
  fs.writeFile(filePath, content, 'utf8', (err) => {
    if (err) return callback(err);
    callback(null);
  });
}

module.exports = { readFile, writeFile };
