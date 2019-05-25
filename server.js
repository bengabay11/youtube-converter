const dotenv = require('dotenv');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

dotenv.config();
const app = express();
const port = process.env.PORT;
const static_folder = process.env.STATIC_FOLDER;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, static_folder)));

app.get('/video-info', (req, res) => {
    console.log(req.body);
});

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, static_folder, 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}...`));