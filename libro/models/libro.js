const pool = require('../config/database').pool;

exports.getAllBooks = (callback) => {
    pool.query('SELECT * FROM libros', (error, results) => {
        if (error) {
            return callback(error);
        }
        callback(null, results);
    });
};

exports.createBook = (data, callback) => {
    const { title, author, publishedDate } = data;
    pool.query('INSERT INTO libros (title, author, publishedDate) VALUES (?, ?, ?)', [title, author, publishedDate], (error, results) => {
        if (error) {
            return callback(error);
        }
        callback(null, results.insertId);
    });
};

exports.updateBook = (id, data, callback) => {
    const { title, author, publishedDate } = data;
    pool.query('UPDATE libros SET title = ?, author = ?, publishedDate = ? WHERE id = ?', [title, author, publishedDate, id], (error, results) => {
        if (error) {
            return callback(error);
        }
        callback(null, results);
    });
};

exports.deleteBook = (id, callback) => {
    pool.query('DELETE FROM libros WHERE id = ?', [id], (error, results) => {
        if (error) {
            return callback(error);
        }
        callback(null, results);
    });
};
