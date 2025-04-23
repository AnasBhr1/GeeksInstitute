const express = require('express');
require('dotenv').config();

const app = express();
const postRoutes = require('./routes/postRoutes');

app.use(express.json());
app.use('/posts', postRoutes);

app.use((req, res) => res.status(404).send('Route not found'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
