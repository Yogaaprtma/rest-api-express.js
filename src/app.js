const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');
const routes = require('./routes');
const notFoundHandler = require('./middlewares/notfound.middleware');
const errorHandler = require('./middlewares/error.middleware');
const rateLimiter = require('./middlewares/rateLimit.middleware');
const throttler = require('./middlewares/throttle.middleware');

const app = express();

// Middleware Global
app.use(express.json());
app.use(cors());
app.use(helmet());

// Apply Rate Limiter ke semua request
app.use(rateLimiter);

// Throttler
app.use(throttler);

// Dokumentasi Swagger
const swaggerDocument = YAML.load(path.join(__dirname, '../swagger.yaml'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routing Utama
app.use('/api/v1', routes);

// 404 Handler (jika route tidak ditemukan)
app.use(notFoundHandler);

// 500 Handler (Error Global)
app.use(errorHandler);

module.exports = app;