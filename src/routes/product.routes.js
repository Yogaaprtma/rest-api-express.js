const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');
const verifyToken = require('../middlewares/apiKey.middleware');

// Proteksi semua route dibawah ini dengan JWT Token
router.use(verifyToken);

router.get('/', productController.index);
router.get('/:id', productController.show);
router.post('/', productController.store);
router.put('/:id', productController.update);
router.delete('/:id', productController.destroy);

module.exports = router;