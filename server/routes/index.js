const router = require('express').Router();
const config = require('../config');
const path = require('path');
const fs = require('fs');

router.use('/videos', require('./videos'));
router.use('/health_check', require('./health_check'));

router.get('/', (req, res) => {
    let pagePath = path.join(__dirname, "../../", config.app.buildFolder, 'index.html');
    if (fs.existsSync(pagePath)) {
        res.sendFile(pagePath);
    }
    else {
        res.status(config.httpResponses.notFound).send("The requested page not found.");
    }
});

module.exports = router;