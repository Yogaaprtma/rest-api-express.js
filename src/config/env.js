require('dotenv').config();

module.exports = {
    // Server
    port: process.env.PORT || 3000,
    nodeEnv: process.env.NODE_ENV || 'development',

    // Database
    dbUrl: process.env.DATABASE_URL,

    // Security
    jwtSecret: process.env.JWT_SECRET,
    jwtExpiresIn: process.env.JWT_EXPIRES_IN || '1h',
    clientKey: process.env.API_CLIENT_KEY,
    clientSecret: process.env.API_CLIENT_SECRET,

    // Rate Limit Config (Hard Limit - Blokir total)
    rateLimitWindow: 15 * 60 * 1000, // 15 menit
    rateLimitMax: 100, // Stop di request ke-100

    // Throttle Config (Soft Limit - Mulai melambat)
    throttleWindow: 15 * 60 * 1000, // 15 menit
    throttleDelayAfter: 50, // Mulai melambat setelah request ke-50
    throttleDelayMs: 500 // Tambah delay 500ms per request berlebih
};