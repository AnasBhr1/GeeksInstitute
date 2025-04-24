let books = require('../models/bookModel');

exports.getAllBooks = (req, res) => {
  res.status(200).json(books);
};

exports.getBookById = (req, res) => {
  const id = parseInt(req.params.bookId);
  const book = books.find(b => b.id === id);
  if (!book) return res.status(404).json({ message: 'Book not found' });
  res.status(200).json(book);
};

exports.createBook = (req, res) => {
  const { title, author, publishedYear } = req.body;
  const newBook = {
    id: books.length + 1,
    title,
    author,
    publishedYear
  };
  books.push(newBook);
  res.status(201).json(newBook);
};
