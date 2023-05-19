const config = require("./config");
const express = require("express");
const routes = require("./routes");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const printRequest = require("./middlewares/printRequest");

const app = express();

app.use(printRequest);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../", config.app.buildFolder)));
app.use("/assets", express.static(path.join(__dirname, "../", config.app.assetsFolder)));
app.use("/", routes);

if (!fs.existsSync(config.downloadsFolder)) {
	fs.mkdirSync(config.downloadsFolder);
}

let options = {
	key: fs.readFileSync(path.join(__dirname, "ssl/youtube-converter.key")),
	cert: fs.readFileSync(path.join(__dirname, "ssl/youtube-converter.cert")),
};

let server;
if (config.useSsl) {
	const https = require("https");
	server = https.createServer(options, app);
} else {
	server = app;
}
server.listen(config.app.port, config.app.host, null, () =>
	console.log(`Listening on port ${config.app.port}...`)
);
