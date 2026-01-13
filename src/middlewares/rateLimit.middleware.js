const rateLimit = require('express-rate-limit');
const { errorResponse } = require('../utils/response');
const env = require('../config/env');

const limiter = rateLimit({
    windowMs: env.rateLimitWindow,
    max: env.rateLimitMax,
    standardHeaders: true,
    legacyHeaders: false,

    handler: (req, res) => {
        errorResponse(res, 429, 'Terlalu banyak request dari IP ini, silahkan coba lagi setelah 15 menit.');
    }
});

module.exports = limiter;