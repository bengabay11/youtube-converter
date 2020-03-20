export const formatString = (string, params) => {
    params.forEach(param => {
       string = string.replace("{}", param);
    });
    return string;
};

export const paramsObjectToQueryString = paramsObject => {
    let query = "";
    if (paramsObject){
        const firstParamKey = Object.keys(paramsObject)[0];
        query += `?${firstParamKey}=${paramsObject[firstParamKey]}`;
        delete paramsObject[firstParamKey];
        for (const [key, value] of Object.entries(paramsObject)) {
            query += `&${key}=${value}`;
        }
    }
    return query;
};

export const getVideoIdFromLink = videoLink => videoLink.split("?v=")[1];