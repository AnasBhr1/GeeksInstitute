const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Parser = require('rss-parser');

const app = express();
const PORT = 3000;
const parser = new Parser();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Global feed variable to avoid refetching for every request
let allPosts = [];

(async () => {
  let feed = await parser.parseURL('https://thefactfile.org/feed/');
  allPosts = feed.items;
})();

app.get('/', async (req, res) => {
  res.render('pages/index', { posts: allPosts });
});

app.get('/search', (req, res) => {
  res.render('pages/search', { posts: [] });
});

app.post('/search/title', (req, res) => {
  const title = req.body.title.toLowerCase();
  const filtered = allPosts.filter(post => post.title.toLowerCase().includes(title));
  res.render('pages/search', { posts: filtered });
});

app.post('/search/category', (req, res) => {
  const category = req.body.category.toLowerCase();
  const filtered = allPosts.filter(post =>
    post.categories && post.categories.some(cat => cat.toLowerCase() === category)
  );
  res.render('pages/search', { posts: filtered });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
