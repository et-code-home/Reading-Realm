# Reading-Realm
 a full-stack A project that combines the power of Express.js and React to create a seamless platform for book enthusiasts

# 📚 Reading Realm: Your Digital Sanctuary for Book Enthusiasts 📖

Reading Realm is a dynamic project that harmonizes the capabilities of Express.js and React to create an immersive platform for avid readers. Organize your book assortment, unearth new literary gems, and connect with fellow bibliophiles!

## 🔥 Features:
- Curate your digital bookshelf and showcase your collection.
- Delve into an extensive array of books sourced from the API.
- Seamlessly add, modify, and delete books at your convenience.
- Engage in meaningful discussions within a vibrant reading community.
- Revel in an intuitive and aesthetic user experience.

## 💡 Crafted with:
- Express.js for crafting the resilient backend API.
- React for sculpting the engaging and responsive frontend.
- PostgreSQL to securely store and manage your literary inventory.
- CSS for a visually pleasing and inviting interface.

## How to build:
1. Create a new repository on GitHub
  - initialize with a README
  - select 'Node' for the .gitignore

2. Clone your repo

3. Create a new PostgreSQL database for your project called `reading_realm`
```bash
createdb reading_realm
```

4. Initialize a new Node.js project and install the necessary dependencies

    ```bash
    npm init -y
    npm install express pg nodemon
    ```

5. Create a file named `app.js` in your project directory.

6. Set up the basic structure of your Express application in `app.js`:

    ```js
    const express = require('express');
    const app = express();
    const port = 3000; // You can change this if needed

    const db = require('./db/client')
    db.connect()

    app.use(express.json());

    app.get('/', (req, res) => {
    res.send('Welcome to the Book API');
    });

    app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    });
    ```

7. Create a new directory `db`. Inside this directory, create a file `index.js` for managing the database connection

    ```js
    const { Client } = require('pg')();
    const connectionString = process.env.DATABASE_URL || 'https://localhost:5432/reading_realm';

    const db = new Client({
        connectionString,
        ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : undefined,
    });

    module.exports = db;
    ```

8. Create an `api` folder for managing routes. Inside this directory, create a file named `books.js`

9. Set up the routes for managing books

    ```js
    const express = require('express');
    const router = express.Router();
    const db = require('../db');

    router.get('/', async (req, res) => {
    try {
        const books = await db.any('SELECT * FROM books');
        res.json(books);
    } catch (error) {
        console.error('Error getting books:', error);
        res.status(500).json({ message: 'An error occurred while getting books' });
    }
    });

    // Add more routes for creating, updating, and deleting books

    module.exports = router;
    ```

10. In `app.js`, import and use the `books` router:

    ```js
    const booksRouter = require('./api/books');
    app.use('/books', booksRouter);
    ```

11. Test the API Endpoints by running the Express app

    ```bash
    npm run start
    ```

12. Open a browser or use a tool like Thunder Client or Postman to test the API endpoints:
- `GET http://localhost:3000/`: Displays "Welcome to the Book API"
- `GET http://localhost:3000/books`: Fetches a list of books

### Add a React.JS frontend

13. In your top-level project directory, initialize a new React app called `client` inside the client directory:

    ```bash
    npm create vite@latest
    cd client
    npm install
    npm install react-router-dom
    ```

14. Choose **React** as the framework and **JavaScript** as the variant when prompted

15. Modify `vite.config.js` by adding the block below to allow us to fetch data from the locally hosted backend server

    ```bash
    import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'

    // https://vitejs.dev/config/
    export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
        '/api': {
            target: 'http://127.0.0.1:3000',
            changeOrigin: true,
            secure: false,
            ws: true,
            rewrite: path => path.replace(/^\/api/, '')
        }
        }
    }
    })
    ```

16. Inside the `src` directory of the client app add a `components` foldera nd create a new file named `Books.jsx`. This will be a functional component to fetch and display book data.

    ```jsx
    import React, { useState, useEffect } from 'react';

    const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        async function fetchBooks() {
            try {
                const response = await fetch('/books');
                const bookData = await response.json();
                setBooks(bookData)
            }
            catch(err) {
                console.error('Error fetching books:', err);
            }
        }
        fetchBooks()
    }, []);

    return (
        <div>
        <h1>Book List</h1>
        <ul>
            {books.map(book => (
            <li key={book.id}>
                <strong>{book.title}</strong> by {book.author}
            </li>
            ))}
        </ul>
        </div>
    );
    };

    export default Books;
    ```

17. Update the React App by opening `src/App.jsx` in the client app and replacing the default content with your Books component

    ```jsx
    import React from 'react';
    import './App.css';
    import Books from './components/Book';

    function App() {
    return (
        <div className="App">
        <header className="App-header">
            <Books />
        </header>
        </div>
    );
    }

    export default App;
    ```

18. Open a second terminal window, navigate to the client folder, and start the React development server
    ```bash
    cd client
    npm run dev
    ```
