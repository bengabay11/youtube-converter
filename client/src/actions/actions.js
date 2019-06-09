import {Song} from "../DTOs/Song";
import {
    ADD_SONG,
    BEGIN_DOWNLOAD_SONG_INFO, BEGIN_DOWNLOAD_SONGS,
    DELETE_SONG, DOWNLOAD_SONG_ERROR, DOWNLOAD_SONG_INFO_ERROR, ERROR_CONFIRMED, FINISH_DOWNLOAD_SONGS,
    UPDATE_FORMAT,
    UPDATE_LINK,
    UPDATE_SONG
} from "./action-types";
import config from "../config";
import organizeVideoUploadDate from "../utils/organizeVideoUploadDate";

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
    let url = `${config.serverAddress}/videos/info?link=${link}`;
    fetch(url, {
        method: 'GET',
        headers: {
            Accept: 'application/json'
        },
    })
    .then(response => response.json())
    .then(jsonBody => dispatch(downloadSongInfoSuccess(jsonBody, format)))
    .catch((err) => dispatch(downloadSongInfoError(err)));
};

export const downloadSongInfoSuccess = (songInfo, format) => {
    console.log(songInfo["channel_url"]);
    let uploadDate = organizeVideoUploadDate(songInfo['upload_date']);
    let song = Song(songInfo['id'], songInfo['title'], songInfo['webpage_url'], format, songInfo['uploader'],
        songInfo['duration'], uploadDate, songInfo["channel_url"]);
    return {
        type: ADD_SONG,
        song
    };
};

export const downloadSongInfoError = (error) => {
    return {
        type: DOWNLOAD_SONG_INFO_ERROR,
        error
    };
};

export const downloadSongs = (button, songs) => (dispatch) => {
    dispatch({ type: BEGIN_DOWNLOAD_SONGS});
    for (let song of songs) {
        // let url = `${config.serverAddress}/download-video/?link=${song['link']}`;
        // fetch(url, {
        //     method: 'GET',
        //     headers: {
        //         Accept: 'application/json'
        //     },
        // })
        // .then(response => response.text())
        // .then(fileContent => {
        //     // dispatch(downloadSongSuccess(jsonBody))
        // })
        // .catch((err) => {
        //     console.log(err);
        //     // dispatch(downloadSongError(err))
        // });
    }
    dispatch({ type: FINISH_DOWNLOAD_SONGS })
};

export const downloadSongSuccess = (song) => {
    console.log(song);
};

export const downloadSongError = (error) => {
    return {
        type: DOWNLOAD_SONG_ERROR,
        error
    }
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
