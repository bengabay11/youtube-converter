module.exports = (req, res, next) => {
    res.on('finish', () => {
        const date = new Date();
        const currentTime = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        const requestMessage = `* ${currentTime} [${req.method}] ${req.originalUrl} ${res.statusCode}`
        console.log(requestMessage);
    });
    next();
};