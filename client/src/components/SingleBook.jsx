import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

    const SingleBook = () => {
    const [book, setBook] = useState([]);

    let { id } = useParams();
    if(id === 'surprise') {
        id = Math.ceil(Math.random()*3);
    }

    useEffect(() => {
        async function fetchBooks() {
            try {
                const response = await fetch(`/api/books/${id}`);
                const bookData = await response.json();
                setBook(bookData)
            }
            catch(err) {
                console.error('Error loading books', err);
            }
        }
        fetchBooks()
    }, []);

    return (
        <div>
            {book.title ? <>
                <h2>{book.title}</h2> 
                <h3>by {book.author}</h3>
                <img src={book.image} alt='cover' />
            </> :
            <p>Book does not exist 😢</p>
            }
        </div>
    );
    };

    export default SingleBook;