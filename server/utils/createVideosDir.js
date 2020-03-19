const uuid = require('uuid');

module.exports = () => {
    const videosDir = uuid();
    while (!fs.existsSync(videosDir)){
        videosDir = uuid();
    }
    fs.mkdirSync(videosDir);

    return videosDir;
};