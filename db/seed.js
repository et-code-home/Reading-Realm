const db = require('./client')

const books = [
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', image: 'https://www.fictiondb.com/covers/0684801523.jpg' },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', image: 'https://www.fictiondb.com/covers/0446310786.jpg' },
  { title: '1984', author: 'George Orwell', image: 'https://www.fictiondb.com/covers/0451524934.jpg' },
  // Add more books as needed
];

const dropTables = async () => {
    try {
        await db.query(`
        DROP TABLE IF EXISTS books;
        `)
    }
    catch(err) {
        throw err;
    }
}

const createTables = async () => {
    try{
        await db.query(`
        CREATE TABLE books(
            id SERIAL PRIMARY KEY,
            title VARCHAR(255),
            author VARCHAR(255),
            image VARCHAR(255)
        )`)
    }
    catch(err) {
        throw err;
    }
}

const insertBooks = async () => {
  try {
    for (const book of books) {
      await db.query('INSERT INTO books (title, author, image) VALUES ($1, $2, $3)', [book.title, book.author, book.image]);
    }
    console.log('Seed data inserted successfully.');
  } catch (error) {
    console.error('Error inserting seed data:', error);
  }
};

const seedDatabse = async () => {
    try {
        db.connect();
        await dropTables();
        await createTables();
        await insertBooks();
        const {rows} = await db.query('SELECT * FROM books;');
        console.log(rows)
    }
    catch (err) {
        throw err;
    }
    finally {
        db.end()
    }
}

seedDatabse()
