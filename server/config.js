const dotenv = require('dotenv');
dotenv.config();

const config = {
    app: {
        port: process.env['PORT'] || 443,
        host: process.env['HOST'] || "0.0.0.0",
        buildFolder: process.env['BUILD_FOLDER'] || 'client/build',
        assetsFolder: process.env['ASSETS_FOLDER'] || 'client/public/assets'
    },
    httpResponses : {
        ok: 200,
        notFound: 404,
        internalServerError: 500
    },
    channel_url: "https://www.youtube.com/channel"
};

module.exports = config;