import {paramsObjectToQueryString} from "./formatting";

export const sendHttpRequest = async (url, method, body, params, headers={}) => {
        url += paramsObjectToQueryString(params);
        return await fetch(url, {
            method,
            headers,
            body
        });
};

export const handleResponse = async (response, statusOptions) => {
    const responseBody = await response.json();
    statusOptions[response.status](responseBody)
};