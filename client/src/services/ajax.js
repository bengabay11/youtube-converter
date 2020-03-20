import {paramsObjectToQueryString} from "./formatting";

export const sendHttpRequest = async (url, method, body, params, headers={}, callbackError) => {
        try{
            url += paramsObjectToQueryString(params);
            return await fetch(url, {
                method,
                headers,
                body
            });
        }
        catch (e) {
            callbackError(e);
        }

};

export const handleResponse = async (response, statusOptions) => {
    const responseBody = await response.json();
    statusOptions[response.status](responseBody)
};