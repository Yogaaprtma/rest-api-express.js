const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { successResponse, errorResponse } = require('../utils/response');
const productRoutes = require('./product.routes');
const env = require('../config/env');

// AUTH ENDPOINT (Generate Token)
router.post('/auth/token', (req, res) => {
    const apiKey = req.headers['x-api-key'];
    const apiSecret = req.headers['x-api-secret'];

    // Cek kredensial sesuai .env
    if (apiKey === env.clientKey && apiSecret === env.clientSecret) {

        // Buat token menggunakan expired dari config
        const token = jwt.sign(
            { app: 'optima-app' }, 
            env.jwtSecret, 
            { expiresIn: env.jwtExpiresIn }
        );
        
        return successResponse(res, 200, 'Token Generated', { token });
    }

    return errorResponse(res, 401, 'Kredensial API Key/Secret Salah');
});

// Sambungkan ke route produk
router.use('/products', productRoutes);

module.exports = router;