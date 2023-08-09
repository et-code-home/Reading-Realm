import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
    const Books = (setSelectedBook) => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        async function fetchBooks() {
            try {
                const response = await fetch('/api/books');
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
        <ul>
            {books.map(book => (
            <li key={book.id} >
                <Link to={`/books/${book.id}`}>
                    <strong>{book.title}</strong> by {book.author}
                </Link>
            </li>
            ))}
        </ul>
        </div>
    );
    };

    export default Books;