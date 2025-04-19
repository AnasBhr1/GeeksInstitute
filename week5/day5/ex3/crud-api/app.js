const express = require('express');
const { fetchPosts } = require('./data/dataService');

const app = express();
app.use(express.json());

app.get('/api/posts', async (req, res) => {
  try {
    const posts = await fetchPosts();
    console.log('Posts successfully retrieved and sent');
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve posts' });
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
