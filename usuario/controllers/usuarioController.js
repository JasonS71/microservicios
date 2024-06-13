const usuarioModel = require('../models/usuario');

exports.createUser = (req, res) => {
    const data = req.body;
    usuarioModel.createUser(data, (error, insertId) => {
        if (error) {
            return res.status(500).json({ error: 'Error al crear el usuario' });
        }
        res.status(201).json({ id: insertId });
    });
};

exports.getUser = (req, res) => {
    const { id } = req.params;
    usuarioModel.getUser(id, (error, result) => {
        if (error) {
            return res.status(500).json({ error: 'Error al obtener el usuario' });
        }
        if (!result) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        res.json(result);
    });
};
