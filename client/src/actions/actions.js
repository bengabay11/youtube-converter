import {
    BEGIN_DOWNLOAD_SONG_INFO,
    DELETE_SONG, DOWNLOAD_SONG_INFO_ERROR,
    DOWNLOAD_SONG_INFO_SUCCESS,
    UPDATE_FORMAT,
    UPDATE_LINK,
    UPDATE_SONG
} from "./action-types";

export const updateLink = (newLink) => {
    return {
        type: UPDATE_LINK,
        link: newLink
    };
};

export const updateFormat = (newFormat) => {
    return {
        type: UPDATE_FORMAT,
        format: newFormat
    };
};

export const addSong = (link, format) => (dispatch) => {
    dispatch({ type: BEGIN_DOWNLOAD_SONG_INFO });

    let init = {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            link: link
        }),
    };
    // let fullUrl = `http://www.youtube.com/oembed?url=${link}`;
    let url = "http://localhost:3000/video-info";
    return fetch(url, init)
        .then((response) => {
            dispatch(download_song_info_success(response));
        })
        .catch((err) => {
            dispatch(download_song_info_error(err))
        });
};

export const download_song_info_success = (response) => {
    return {
        type: DOWNLOAD_SONG_INFO_SUCCESS,
        response: response
    };
};

export const download_song_info_error = (error) => {
    return {
        type: DOWNLOAD_SONG_INFO_ERROR,
        error: error
    };
};


export const deleteSong = (id) => {
    return {
        type: DELETE_SONG,
        id: id
    };
};

export const updateSongField = (id, field, value) => {
    return {
        type: UPDATE_SONG,
        id: id,
        field: field,
        value: value
    };
};
