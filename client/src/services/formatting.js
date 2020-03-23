export const formatString = (string, ...params) => {
    params.forEach(param => {
       string = string.replace("{}", param);
    });
    return string;
};

export const getVideoIdFromURL = videoLink => new URL(videoLink).searchParams.get("v");