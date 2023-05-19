const router = require("express").Router();
const config = require("../../config");
const ytdl = require("ytdl-core");
const youtubedl = require("youtube-dl-exec");
const httpStatus = require("http-status-codes");
const path = require("path");
const uuid = require("uuid");

router.get("/info", async (req, res) => {
	const info = await ytdl.getInfo(req.query["link"]);
	const responseBody = {
		video_id: info.videoDetails.videoId,
		title: info.videoDetails.title,
		video_url: info.videoDetails.video_url,
		formats: [...new Set(info.formats.map((formatInfo) => formatInfo.container))],
		author: info.videoDetails.author,
		duration: new Date(info.videoDetails.lengthSeconds * 1000).toISOString().substr(11, 8),
		uploaded_at: new Date(info.videoDetails.publishDate).toLocaleDateString(),
		channel_url: `${config.channel_url}/${info.ucid}`,
	};
	res.status(httpStatus.OK).send(responseBody);
});

router.get("/download", async (req, res) => {
	let link = req.query["link"];
	let format = req.query["format"];
	const filename = `${uuid()}.${format}`;
	const filePath = path.join(config.downloadsFolder, filename);
	try {
		await youtubedl(link, {
			path: config.downloadsFolder,
			output: filename,
			format,
		});
		res.download(filePath);
	} catch (err) {
		res.errored(err);
	}
});

module.exports = router;
