const express = require('express');
const router = express.Router();

const{ getAllBooks, getSingleBook } = require('../db')

router.get('/', async (req, res) => {
  try {
    const books = await getAllBooks();
    res.send(books);
  } catch (error) {
    console.error('Error getting books:', error);
    res.status(500).send({ message: 'An error occurred while getting books' });
  }
});

router.get('/:id', async (req, res) => {
    try {
      const book = await getSingleBook(req.params.id);
      res.send(book);
    } catch (error) {
      console.error('Error getting book:', error);
      res.status(500).send({ message: 'An error occurred while getting the book' });
    }
  });

// Add more routes for creating, updating, and deleting books

module.exports = router;
