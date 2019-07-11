const router = require('express').Router();
const config = require('../../config');
const ytdl = require('ytdl-core');
const youtubedl = require('youtube-dl');
const httpStatus = require('http-status-codes');

router.get('/info', (req, res) => {
    let videoLink = req.query["link"];
    ytdl.getInfo(videoLink,{}, (err, info) => {
        if (err) {
            let response = {
                message: `Error accrued while fetching info about the video: ${videoLink}`,
                error: err
            };
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(response);
        }
        info["uploaded_at"] = new Date(info["published"]).toLocaleDateString();
        info["formats"] = info["formats"].map(formatInfo => formatInfo.container) ;
        info["formats"] = info["formats"]
            .filter((format, index) => info["formats"].indexOf(format) === index && format !== undefined);
        info["duration"] = new Date(info["length_seconds"] * 1000).toISOString().substr(11, 8);
        info["channel_url"] = `${config.channel_url}/${info["ucid"]}`;
        res.status(httpStatus.OK).send(info);
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

module.exports = router;