const router = require('express').Router();
const config = require('../../config');

router.get('/', (req, res) => {
    res.status(config.httpResponses.ok).send("The connection to the server has been successfully completed")
});

module.exports =router;