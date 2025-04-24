const express = require('express');
const app = express();
const bookRoutes = require('./server/routes/bookRoutes');

app.use(express.json());
app.use('/api', bookRoutes);

app.use((req, res) => {
  res.status(404).send('Route not found');
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
