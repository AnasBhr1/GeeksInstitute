const express = require('express');
const app = express();
const bookRoutes = require('./routes/books');

app.use(express.json()); // Middleware to parse JSON
app.use('/books', bookRoutes); // Mount router

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});