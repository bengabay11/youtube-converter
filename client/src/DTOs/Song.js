import config from "../config";

export const Song = (id, name, link, format = config.defaultFormat, artist = "", duration = 0, uploadedAt = Date()) => {
    return {
        id: id,
        name: name,
        link: link,
        format: format,
        artist: artist,
        duration: duration,
        uploadedAt: uploadedAt
    };
};

export default Song;