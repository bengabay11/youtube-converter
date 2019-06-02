import config from "../config";

export const Song = (id, name, link, format = config.defaultFormat, artist = "", duration = 0, uploadedAt = "", channel_url) => {
    return {
        id: id,
        name: name,
        link: link,
        format: format,
        artist: artist,
        duration: duration,
        uploadedAt: uploadedAt,
        channel_url: channel_url
    };
};

export default Song;