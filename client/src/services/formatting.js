export const formatString = (string, params) => {
    params.forEach(param => {
       string = string.replace("{}", param);
    });
    return string;
};

export const getVideoIdFromLink = (videoLink) => {
    return videoLink.split("?v=")[1];
};