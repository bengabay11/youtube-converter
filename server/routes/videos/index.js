import {formatResponseBodyBySongInfo} from "../../utils/formatting";

const router = require('express').Router();
const config = require('../../config');
const ytdl = require('ytdl-core');
const youtubedl = require('youtube-dl');
const httpStatus = require('http-status-codes');

router.get(config.resources.videoInfo, (req, res) => {
    const videoId = req.params["video_id"];
    const videoLink = config.youtube.video_url + videoId;
    let responseBody, statusCode;
    ytdl.getInfo(videoLink,{}, (err, info) => {
        if (err) {
            responseBody = {
                message: `Error accrued while fetching info about the video: ${videoLink}`,
                error: err
            };
            statusCode = httpStatus.INTERNAL_SERVER_ERROR;
        }
        else {
            responseBody = formatResponseBodyBySongInfo(info);
            statusCode = httpStatus.OK;
        }
        res.status(statusCode).send(responseBody);
    });
});

router.get(config.resources.downloadVideo, (req, res) => {
    const videoId = req.params["video_id"];
    const videoLink = config.youtube.video_url + videoId;
    const videoName = req.query["name"];
    const format = req.query["format"];
    const options = [`--format=${format}`];
    const video = youtubedl(videoLink, [], options);
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