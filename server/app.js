const config = require('./config');
const express = require('express');
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const printRequest = require('./middlewares/printRequest');

const app = express();

app.use(printRequest);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../", config.app.staticFolder)));
app.use('/', routes);

app.listen(config.app.port, () => console.log(`Listening on port ${config.app.port}...`));