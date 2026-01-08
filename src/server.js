require('dotenv').config();
const app = require('./app');
const logger = require('./config/logger');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    logger.info(`=================================`);
    logger.info(`🚀 Server running on PORT ${PORT}`);
    logger.info(`📄 Swagger Docs: http://localhost:${PORT}/api-docs`);
    logger.info(`=================================`);
});