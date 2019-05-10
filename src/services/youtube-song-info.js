import * as axios from "axios";

export const getSongInfoFromYoutube = async (link) => {
    let fullUrl = `http://www.youtube.com/oembed?url=${link}`;
    let options = {
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    };
    let response = await axios.get(fullUrl, options);
};