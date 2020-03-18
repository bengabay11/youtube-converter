export const formatString = (string, params) => {
    params.forEach(param => {
       string = string.replace("{}", param);
    });
    return string;
};

export const generateResourceUrl = (host, path, ...values) => {
    const resource = formatString(path, values);
    return host + resource;
};

export const getVideoIdFromLink = (videoLink) => {
    return videoLink.split("?v=")[1];
};