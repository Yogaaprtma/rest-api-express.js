const { errorResponse } = require('../utils/response');
const logger = require('../config/logger');

const errorHandler = (err, req, res, next) => {
    logger.error(err.stack);

    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';

    errorResponse(res, statusCode, message);
};

module.exports = errorHandler;