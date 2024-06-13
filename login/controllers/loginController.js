const Usuario = require('../models/usuario');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await Usuario.findOne({ username, password });
        if (!user) {
            return res.status(401).json({ error: 'Credenciales incorrectas' });
        }
        const accessToken = jwt.sign({ username: user.username }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
        res.json({ accessToken });
    } catch (error) {
        res.status(500).json({ error: 'Error en el proceso de autenticación' });
    }
};
