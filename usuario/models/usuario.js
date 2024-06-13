const pool = require('../config/database').pool;

exports.createUser = (data, callback) => {
    const { username, password } = data;
    pool.query('INSERT INTO usuarios (username, password) VALUES (?, ?)', [username, password], (error, results) => {
        if (error) {
            return callback(error);
        }
        callback(null, results.insertId);
    });
};

exports.getUser = (id, callback) => {
    pool.query('SELECT * FROM usuarios WHERE id = ?', [id], (error, results) => {
        if (error) {
            return callback(error);
        }
        callback(null, results[0]);
    });
};
