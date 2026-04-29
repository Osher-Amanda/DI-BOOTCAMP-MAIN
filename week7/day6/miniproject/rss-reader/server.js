const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Parser = require('rss-parser');

const app = express();
const parser = new Parser();

const RSS_URL = "https://thefactfile.org/feed/";

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// GET ALL POSTS
app.get('/', async (req, res) => {
  let feed = await parser.parseURL(RSS_URL);
  res.render('pages/index', { posts: feed.items });
});

// SEARCH PAGE
app.get('/search', (req, res) => {
  res.render('pages/search', { posts: [] });
});

// SEARCH BY TITLE
app.post('/search/title', async (req, res) => {
  const title = req.body.title;

  let feed = await parser.parseURL(RSS_URL);

  let filtered = feed.items.filter(item =>
    item.title.toLowerCase().includes(title.toLowerCase())
  );

  res.render('pages/search', { posts: filtered });
});

// SEARCH BY CATEGORY
app.post('/search/category', async (req, res) => {
  const category = req.body.category;

  let feed = await parser.parseURL(RSS_URL);

  let filtered = feed.items.filter(item =>
    item.categories?.some(cat =>
      cat.toLowerCase().includes(category.toLowerCase())
    )
  );

  res.render('pages/search', { posts: filtered });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});