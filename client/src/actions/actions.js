import {Song} from "../DTOs/Song";
import {
    ADD_SONG,
    BEGIN_DOWNLOAD_SONG_INFO,
    DELETE_SONG, DOWNLOAD_SONG_INFO_ERROR, ERROR_CONFIRMED,
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
    let url = `http://localhost:3000/video-info/?link=${link}`;
    fetch(url, {
        method: 'GET',
        headers: {
            Accept: 'application/json'
        },
    })
    .then(response => response.json())
    .then(jsonBody => dispatch(download_song_info_success(jsonBody, format)))
    .catch((err) => dispatch(download_song_info_error(err)));
};

export const download_song_info_success = (songInfo, format) => {
    let song = Song(songInfo.id, songInfo.title, songInfo.webpage_url, format, songInfo.uploader,
        songInfo.duration, songInfo.upload_date);
    return {
        type: ADD_SONG,
        song
    };
};

export const download_song_info_error = (error) => {
    return {
        type: DOWNLOAD_SONG_INFO_ERROR,
        error
    };
};

export const errorConfirmed = () => {
    return {
        type: ERROR_CONFIRMED
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
