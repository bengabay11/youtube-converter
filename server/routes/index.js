const router = require('express').Router();
const config = require('./config');

router.use('/search', require('./videos'));

// Handle React routing, return all requests to React app
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, config.app.staticFolder, 'index.html'));
});

module.exports = router;