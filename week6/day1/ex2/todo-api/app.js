const express = require('express');
const app = express();
const todoRoutes = require('./routes/todos');

app.use(express.json()); // Middleware to parse JSON
app.use('/todos', todoRoutes);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});