const router = require('express').Router();
const config = require('../../config');
const createVideosDir = require('../../utils/createVideosDir');
const createZipFile = require('../../utils/createZipFile');
const ytdl = require('ytdl-core');
const youtubedl = require('youtube-dl');

router.get('/info', (req, res) => {
    let videoLink = req.query["link"];
    ytdl.getInfo(videoLink,{}, (err, info) => {
        if (err) {
            let response = {
                message: `Error accrued while fetching info about the video: ${videoLink}`,
                error: err
            };
            res.status(config.httpResponses.internalServerError).send(response);
        }
        ytdl.downloadFromInfo(info, () => {
            res.send(info);
        });
        info["uploaded_at"] = new Date(info["published"]).toLocaleDateString();
        info["formats"] = info["formats"].map(formatInfo => formatInfo.container) ;
        info["formats"] = info["formats"].filter((format, index) => info["formats"].indexOf(format) === index);
        info["duration"] = new Date(info["length_seconds"] * 1000).toISOString().substr(11, 8);
        res.send(info);
    });
});

router.get('/download', (req, res) => {
    let videoLink = req.query["link"];
    let videoName = req.query["name"];
    let format = req.query["format"];
    let options = [`--format=${format}`];
    let video = youtubedl(videoLink, [], options);
    try {
        res.set('Content-Disposition', `attachment; filename="${videoName}.${format}"`);
        video.pipe(res);
    }
    catch (e) {
        res.set('Content-Disposition',  `attachment; filename="download.${format}"`);
        video.pipe(res);
    }
});

router.get('/download-all', (req, res) => {
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
    let videosZip = createZipFile(videosPaths);
    res.status(config.httpResponses.ok).send(videosZip);
});

module.exports = router;