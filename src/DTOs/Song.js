import config from "../config";

export const Song = (id, name, link, format = config.defaultFormat, artist = "", length = 0) => {
    return {
        id: id,
        name: name,
        link: link,
        format: format,
        artist: artist,
        length: length
    };
};

export default Song;