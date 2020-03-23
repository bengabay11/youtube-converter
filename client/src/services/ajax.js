export const sendHttpRequest = async (url, method, body, params, headers={}, callbackError) => {
        try {
            url = new URL(url);
            if (params) applyUrlParams(url, params);
            return await fetch(url, {
                method,
                headers,
                body
            });
        } catch (e) {
            callbackError(e);
        }

};

export const handleResponse = async (response, statusActions) => {
    const responseBody = await response.json();
    statusActions[response.status](responseBody)
};

export const applyUrlParams = (url, params) =>
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));