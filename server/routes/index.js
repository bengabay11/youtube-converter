const router = require('express').Router();
const config = require('../config');
const path = require('path');
const fs = require('fs');
const httpStatus = require('http-status-codes');

router.use(config.resources.videos, require('./videos'));
router.use(config.resources.healthCheck, require('./health_check'));

router.get('/', (req, res) => {
    let pagePath = path.join(__dirname, "../../", config.app.buildFolder, 'index.html');
    if (fs.existsSync(pagePath)) {
        res.sendFile(pagePath);
    }
    else {
        res.status(httpStatus.NOT_FOUND).send("The requested page not found.");
    }
});

module.exports = router;