const express = require('express');
const app = express();

app.use(express.json()); 

// Sample data
let books = [
  { id: 1, title: '1984', author: 'George Orwell', publishedYear: 1949 },
  { id: 2, title: 'The Alchemist', author: 'Paulo Coelho', publishedYear: 1988 },
  { id: 3, title: 'Sapiens', author: 'Yuval Noah Harari', publishedYear: 2011 },
];

// Read all books
app.get('/api/books', (req, res) => {
  res.json(books);
});

// Read one book by ID
app.get('/api/books/:bookId', (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const book = books.find(b => b.id === bookId);

  if (book) {
    res.status(200).json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

// Create a new book
app.post('/api/books', (req, res) => {
  const { title, author, publishedYear } = req.body;
  const newBook = {
    id: books.length + 1,
    title,
    author,
    publishedYear,
  };

  books.push(newBook);
  res.status(201).json(newBook);
});

// Start server
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
