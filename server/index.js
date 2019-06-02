const config = require('./config');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const youtubedl = require('youtube-dl');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, config.app.staticFolder)));

app.get('/video-info', (req, res) => {
    let videoLink = req.query["link"];
    youtubedl.getInfo(videoLink,[], [], function(err, info) {
        if (err) reject(err);
        res.send(info);
    });
});

app.get('/download-video', (req, res) => {
    let videoLink = req.query["link"];
    let videoName = req.query["name"];
    let videoExtension = req.query["format"];
    let video = youtubedl(videoLink,
        ['--format=18'],
        { cwd: __dirname}
    );

    res.set('Content-Disposition',  `attachment; filename="${videoName}.${videoExtension}"`);
    video.pipe(res);
});

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, config.app.staticFolder, 'index.html'));
});

app.listen(config.app.port, () => console.log(`Listening on port ${config.app.port}...`));