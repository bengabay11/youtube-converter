const config = require('./config');
const express = require('express');
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const https = require('https');
const fs = require('fs');
const printRequest = require('./middlewares/printRequest');

const app = express();

app.use(printRequest);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../", config.app.buildFolder)));
app.use('/', routes);

const options = {
    key  : fs.readFileSync(path.join(__dirname, config.ssl.keyPath)),
    cert : fs.readFileSync(path.join(__dirname, config.ssl.certPath))
};

https.createServer(options, app).listen(config.app.port, config.app.host, null, () =>
    console.log(`Listening on port ${config.app.port}...`));