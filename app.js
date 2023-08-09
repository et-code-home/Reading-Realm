const express = require('express');
const app = express();
const port = 3000; // You can change this if needed

const db = require('./db/client')
db.connect()

app.use(express.json());

const booksRouter = require('./api/books');
app.use('/books', booksRouter);

app.get('/', (req, res) => {
  res.send('Welcome to the Book API');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
