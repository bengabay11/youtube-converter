const dotenv = require("dotenv");
dotenv.config();

const config = {
	app: {
		port: process.env["PORT"] || 80,
		host: process.env["HOST"] || "0.0.0.0",
		buildFolder: process.env["BUILD_FOLDER"] || "client/build",
		assetsFolder: process.env["ASSETS_FOLDER"] || "client/public/assets",
	},
	useSsl: false,
	channel_url: "https://www.youtube.com/channel",
	downloadsFolder: "downloads",
};

module.exports = config;
