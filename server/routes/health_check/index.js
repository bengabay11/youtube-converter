const router = require('express').Router();

router.get('/', (req, res) => {
    const responseBody = {
      message: "The connection to the server has been successfully completed"
    };
    res.send(responseBody)
});

module.exports =router;