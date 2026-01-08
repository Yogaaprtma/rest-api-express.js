const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { successResponse, errorResponse } = require('../utils/response');
const productRoutes = require('./product.routes');

// AUTH ENDPOINT (Generate Token)
router.post('/auth/token', (req, res) => {
    const apiKey = req.headers['x-api-key'];
    const apiSecret = req.headers['x-api-secret'];

    // Cek kredensial sesuai .env
    if (apiKey === process.env.API_CLIENT_KEY && apiSecret === process.env.API_CLIENT_SECRET) {
        // Buat token (valid 1 jam)
        const token = jwt.sign({ app: 'optima-app' }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return successResponse(res, 200, 'Token Generated', { token });
    }

    return errorResponse(res, 401, 'Kredensial API Key/Secret Salah');
});

// Sambungkan ke route produk
router.use('/products', productRoutes);

module.exports = router;