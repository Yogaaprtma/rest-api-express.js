require('dotenv').config();

module.exports = {
    // Server
    port: process.env.PORT || 3000,
    nodeEnv: process.env.NODE_ENV || 'development',

    // Database
    dbUrl: process.env.DATABASE_URL,

    // Security
    jwtSecret: process.env.JWT_SECRET,
    clientKey: process.env.API_CLIENT_KEY,
    clientSecret: process.env.API_CLIENT_SECRET,

    // Rate Limit Config
    rateLimitWindow: 15 * 60 * 1000,
    rateLimitMax: 100
};