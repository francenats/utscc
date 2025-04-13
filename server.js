// server.js
const express = require('express');
const app = express();
const port = 3000;

// Data buku yang akan ditampilkan
const books = [
    { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling" },
    { title: "The Hobbit", author: "J.R.R. Tolkien" },
    { title: "1984", author: "George Orwell" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" }
];

// Route untuk homepage
app.get('/', (req, res) => {
    let bookList = '<h1>Daftar Buku</h1><ul>';
    books.forEach(book => {
        bookList += `<li>${book.title} oleh ${book.author}</li>`;
    });
    bookList += '</ul>';
    res.send(bookList);
});

// Menjalankan server
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});