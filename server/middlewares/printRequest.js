module.exports = (req, res, next) => {
    res.on('finish', () => {
        let date = new Date();
        let currentTime = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        let requestMessage = `* ${currentTime} [${req.method}] ${req.originalUrl} ${res.statusCode}`
        console.log(requestMessage);
    });
    next();
};