const dotenv = require('dotenv');
dotenv.config();

const config = {
    app: {
        port: process.env['PORT'] || 3001,
        staticFolder: process.env['STATIC_FOLDER'] || 'client/build'
    },
    httpResponses : {
        ok: 200,
        notFound: 404
    },
    formatCodes: {
        mp4: 18
    }
};

module.exports = config;