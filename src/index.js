const express = require('express');
const { v4: uuidv4 } = require('uuid');
const app = express();

app.use(express.json());

const books = [];

app.post('/books', (request, response) => {
  const { title, description, edition, author, isbn } = request.body;

  const bookAlreadyExist = books.some((book) => book.isbn === isbn);

  if (bookAlreadyExist) {
    return response.status(404).json({ error: 'ISBN already exist!' });
  }

  book = {
    id: uuidv4(),
    title,
    description,
    edition,
    author,
    isbn,
  };

  books.push(book);

  return response.status(201).json(books);
});

app.get('/books', (request, response) => {
  return response.json(books);
});

app.put('/books/:id', (request, response) => {
  const { id } = request.params;
  const { title } = request.body;

  const findBook = books.find((book) => book.id === id);

  if (!findBook) {
    return response.status(404).json({ error: 'book not found!' });
  }

  findBook.title = title;

  return response.json(books);
});

app.delete('/books/:id', (request, response) => {
  const { id } = request.params;

  const IndexBook = books.findIndex((book) => book.id == id);

  if (IndexBook < 0) {
    return response.status(400).send();
  }

  books.splice(IndexBook, 1);

  return response.status(200).json(books);
});

app.listen(3000);
