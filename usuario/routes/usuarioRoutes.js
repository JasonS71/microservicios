const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.post('/usuarios', usuarioController.createUser);
router.get('/usuarios/:id', usuarioController.getUser);

module.exports = router;
