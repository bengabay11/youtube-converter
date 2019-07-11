const router = require('express').Router();
const httpStatus = require('http-status-codes');


router.get('/', (req, res) => {
    res.status(httpStatus.OK).send("The connection to the server has been successfully completed")
});

module.exports =router;