const config = require('./config');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const youtubedl = require('youtube-dl');
const fs = require('fs');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, config.app.staticFolder)));

const fetchVideoInfo = (videoLink) => {
    return new Promise((resolve, reject) => {
        youtubedl.getInfo(videoLink,[], [], function(err, info) {
            if (err) reject(err);
            resolve(info);
        });
    });
};

const downloadVideo = (videoLink) => {
    // let filename = path.join(__dirname, uuid());
    let video = youtubedl(videoLink, ['--format=18'], { cwd: __dirname });
    return new Promise((resolve, reject) => {
        video.on('end', () => {
            if (fs.statSync(imagePath)) {
                let bitmap = fs.readFileSync(imagePath);
                let bufferImage = new Buffer(bitmap);
                resolve(bufferImage);
            }
        });
    });
};

app.get('/video-info', (req, res) => {
    let videoLink = req.query["link"];
    fetchVideoInfo(videoLink).then(videoInfo => {
        res.set({
            'Access-Control-Allow-Origin': '*'
        });
        res.send(videoInfo);
    })
});

app.get('/download-video', (req, res) => {
    let videoLink = req.query["link"];
    downloadVideo(videoLink).then(videoInfo => {
        res.set({
            'Access-Control-Allow-Origin': '*'
        });
        res.send(videoInfo);
    })
});

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, config.app.staticFolder, 'index.html'));
});

app.listen(config.app.port, () => console.log(`Listening on port ${config.app.port}...`));