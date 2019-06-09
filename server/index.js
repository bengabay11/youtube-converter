const config = require('./config');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const youtubedl = require('youtube-dl');
const cors = require('cors');
const uuid = require('uuid');
const archiver = require('archiver');


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
    let format = req.query["format"];
    let video = youtubedl(videoLink,
        ['--format=best'],
        { cwd: __dirname}
    );

    res.set('Content-Disposition',  `attachment; filename="${videoName}.${format}"`);
    video.pipe(res);
});

app.get('/download-all-videos', (req, res) => {
    let videos = [];
    let videosDir = createVideosDir();
    let videosPaths = [];
    for (let currentVideo of videos) {
        let videoFileName = `${currentVideo.name}.${currentVideo.format}`;
        let videoFilePath = path.join(videosDir, videoFileName);
        videosPaths.push(videoFilePath);
        let video = youtubedl(currentVideo.url,
            ['--format=18'],
            { cwd: __dirname}
        );
        video.pipe(fs.createWriteStream(videoFilePath))
    }
    let videosZip = createVideosZipFile(videosPaths);
    res.status(config.httpResponses.ok).send(videosZip);
});

const createVideosZipFile = (filePaths) => {
    let zip = archiver('zip', {});
    for(let filePath of filePaths){
        let data = fs.readFileSync(filePath);
        let fileName = path.basename(filePath);
        zip.append(data, { name: fileName });
    }

    return zip;
};

const createVideosDir = () => {
    let videosDir = uuid();
    while (!fs.existsSync(videosDir)){
        videosDir = uuid();
    }
    fs.mkdirSync(videosDir);

    return videosDir;
};

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, config.app.staticFolder, 'index.html'));
});

app.listen(config.app.port, () => console.log(`Listening on port ${config.app.port}...`));