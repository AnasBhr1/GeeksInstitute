// app.js
const { readFile, writeFile } = require('./fileManager');

// Read from Hello World.txt
readFile('Hello World.txt', (err, data) => {
  if (err) return console.error('Read error:', err);
  console.log('Read content:', data);

  // Write to Bye World.txt
  writeFile('Bye World.txt', 'Writing to the file', (err) => {
    if (err) return console.error('Write error:', err);
    console.log('Successfully wrote to Bye World.txt');
  });
});
