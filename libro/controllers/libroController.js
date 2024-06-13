const libroModel = require('../models/libro');

exports.getBooks = (req, res) => {
    libroModel.getAllBooks((error, results) => {
        if (error) {
            return res.status(500).json({ error: 'Error al obtener los libros' });
        }
        res.json(results);
    });
};

exports.createBook = (req, res) => {
    const data = req.body;
    libroModel.createBook(data, (error, insertId) => {
        if (error) {
            return res.status(500).json({ error: 'Error al crear el libro' });
        }
        res.status(201).json({ id: insertId });
    });
};

exports.updateBook = (req, res) => {
    const { id } = req.params;
    const data = req.body;
    libroModel.updateBook(id, data, (error, results) => {
        if (error) {
            return res.status(500).json({ error: 'Error al actualizar el libro' });
        }
        res.json(results);
    });
};

exports.deleteBook = (req, res) => {
    const { id } = req.params;
    libroModel.deleteBook(id, (error, results) => {
        if (error) {
            return res.status(500).json({ error: 'Error al eliminar el libro' });
        }
        res.json(results);
    });
};
