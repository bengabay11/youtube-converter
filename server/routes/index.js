const router = require('express').Router();
const config = require('../config');
const path = require('path');
const fs = require('fs');
const httpStatus = require('http-status-codes');

router.use(config.resources.videos, require('./videos'));
router.use(config.resources.healthCheck, require('./health_check'));

router.get('/', (req, res) => {
    const pagePath = path.join(__dirname, "../../", config.app.buildFolder, 'index.html');
    if (fs.existsSync(pagePath)) {
        res.sendFile(pagePath);
    }
    else {
        const responseBody = {
            message: "The requested page not found."
        };
        res.status(httpStatus.NOT_FOUND).send(responseBody);
    }
});

module.exports = router;