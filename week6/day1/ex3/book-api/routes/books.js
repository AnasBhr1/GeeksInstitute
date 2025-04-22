const express = require('express');
const router = express.Router();

let books = [];
let idCounter = 1;

// Get all books
router.get('/', (req, res) => {
  res.json(books);
});

// Add a new book
router.post('/', (req, res) => {
  const { title, author, year } = req.body;
  if (!title || !author || !year) {
    return res.status(400).json({ error: 'Missing title, author or year' });
  }

  const newBook = { id: idCounter++, title, author, year };
  books.push(newBook);
  res.status(201).json(newBook);
});

// Update a book by ID
router.put('/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const { title, author, year } = req.body;
  const book = books.find(b => b.id === bookId);

  if (!book) return res.status(404).json({ error: 'Book not found' });

  book.title = title || book.title;
  book.author = author || book.author;
  book.year = year || book.year;

  res.json(book);
});

// Delete a book by ID
router.delete('/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const index = books.findIndex(b => b.id === bookId);

  if (index === -1) return res.status(404).json({ error: 'Book not found' });

  const deleted = books.splice(index, 1);
  res.json(deleted[0]);
});

module.exports = router;
