# Youtube Converter
A simple application that downloads videos from YouTube

and converts them to the desired format, written in react-redux.
 
![Demo Image](client/src/assets/youtube_converter_demo.jpg)

## Installation
Install all server and client dependencies
```
$ cd server
$ npm install
$ cd ../client
$ npm install
```

## Deployment
#### Development
```
$ cd server
$ node app.js
$ cd ../client
$ npm start
```
#### Production
inside the root directory:
```
docker build .
docker tag <given_id> youtube-converter:v1.1.0
docker run youtube-converter:v1.1.0
```