const router = require('express').Router();
const config = require('../config');
const path = require('path');
const fs = require('fs');

router.use('/videos', require('./videos'));
router.use('/health_check', require('./health_check'));

// Handle React routing, return all requests to React app
router.get('*', (req, res) => {
    let pagePath = path.join(__dirname, config.app.staticFolder, 'index.html');
    if (fs.existsSync(pagePath)) {
        res.sendFile(pagePath);
    }
    else {
        res.status(config.httpResponses.notFound).send("The requested page not found.");
    }
});

module.exports = router;