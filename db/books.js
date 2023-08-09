const db = require('./client')

// database functions
async function getAllBooks() {
    try {
        const {rows} = await db.query('SELECT * FROM books;');
        return rows;
    } catch(err) {
        throw err;
    }
}

async function getSingleBook(id) {
    try {
        const {rows} = await db.query(`SELECT * FROM books WHERE id=${id};`);
        const response = rows.length > 0 ? rows[0] : 'Book not found';
        return response;
    } catch(err) {
        throw err;
    }
}

module.exports = {
    getAllBooks,
    getSingleBook
}