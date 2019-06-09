const uuid = require('uuid');

module.exports = () => {
    let videosDir = uuid();
    while (!fs.existsSync(videosDir)){
        videosDir = uuid();
    }
    fs.mkdirSync(videosDir);

    return videosDir;
};