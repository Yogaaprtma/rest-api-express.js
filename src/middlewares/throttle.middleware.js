const slowDown = require('express-slow-down');
const env = require('../config/env');

const throttler = slowDown({
    windowMs: env.throttleWindow,
    delayAfter: env.throttleDelayAfter,
    delayMs: (used, req) => {
        const delayAfter = req.slowDown.limit;
        return (used - delayAfter) * env.throttleDelayMs;
    },

    maxDelayMs: 20000
});

module.exports = throttler;