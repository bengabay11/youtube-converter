const formatResponseBodyBySongInfo = songInfo => {
    return {...songInfo,
        uploaded_at: new Date(songInfo.published).toLocaleDateString(),
        formats: getFormatContainersByFormats(songInfo.formats),
        duration: convertSecondsToTime(songInfo.length_seconds),
        channel_url: `${config.youtube.channel_url}/${songInfo.ucid}`
    };
};

const convertSecondsToTime = seconds => new Date(seconds * 1000).toISOString().substr(11, 8);

const getFormatContainersByFormats = formats => {
    formats = formats.map(format => format.container);
    return formats.filter((format, index) => formats.indexOf(format) === index && format !== undefined);
};

module.exports = {
    formatResponseBodyBySongInfo
};