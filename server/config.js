const dotenv = require('dotenv');
dotenv.config();

const config = {
    app: {
        port: process.env['PORT'] || 443,
        host: process.env['HOST'] || "0.0.0.0",
        buildFolder: process.env['BUILD_FOLDER'] || 'client/build',
        assetsFolder: process.env['ASSETS_FOLDER'] || 'client/public/assets'
    },
    resources: {
        healthCheck: "/health_check",
        videos: "/videos",
        videoInfo: "/:video_id/info",
        downloadVideo: "/:video_id/download"
    },
    youtube: {
        channel_url: "https://www.youtube.com/channel",
        video_url: "https://www.youtube.com/watch?v="
    }
};

module.exports = config;