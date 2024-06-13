const express = require('express');
const router = express.Router();
const libroController = require('../controllers/libroController');
const authenticateToken = require('../middlewares/auth');

router.get('/libros', authenticateToken, libroController.getBooks);
router.post('/libros', authenticateToken, libroController.createBook);
router.put('/libros/:id', authenticateToken, libroController.updateBook);
router.delete('/libros/:id', authenticateToken, libroController.deleteBook);

module.exports = router;
