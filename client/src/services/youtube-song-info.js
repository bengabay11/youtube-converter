import request from 'axios';

export const getSongInfoFromYoutube = async (link) => {
    let fullUrl = `http://www.youtube.com/oembed?url=${link}`;
    let options = {
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    };
    return await request.get(fullUrl, options);
};

// import * as youtubedl from "youtube-dl";
//
// export const getSongInfoFromYoutube = (url) => {
// // Optional arguments passed to youtube-dl.
//     var options = ['--username=user', '--password=hunter2'];
//     youtubedl.getInfo(url, options, function(err, info) {
//         if (err) throw err;
//
//         console.log('id:', info.id);
//         console.log('title:', info.title);
//         console.log('url:', info.url);
//         console.log('thumbnail:', info.thumbnail);
//         console.log('description:', info.description);
//         console.log('filename:', info._filename);
//         console.log('format id:', info.format_id);
//     });
// };