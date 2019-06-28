const router = require('express').Router();
const youtubedl = require('youtube-dl');
const config = require('../../config');
const createVideosDir = require('../../utils/createVideosDir');
const createZipFile = require('../../utils/createZipFile');

router.get('/info', (req, res) => {
    let videoLink = req.query["link"];
    youtubedl.getInfo(videoLink,[], [], function(err, info) {
        if (err) {
            let response = {
                message: `Error accrued while fetching info about the video: ${videoLink}`,
                error: err
            };
            res.status(config.httpResponses.internalServerError).send(response);
        }
        res.send(info);
    });
});

router.get('/download', (req, res) => {
    let videoLink = req.query["link"];
    let videoName = req.query["name"];
    let format = req.query["format"];
    let video = youtubedl(videoLink,
        ['--format=best'],
        { cwd: __dirname}
    );
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