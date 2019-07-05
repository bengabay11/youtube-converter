import {
    ADD_SONG,
    BEGIN_DOWNLOAD_SONG_INFO, BEGIN_DOWNLOAD_SONGS,
    DELETE_SONG, DOWNLOAD_SONG_ERROR, DOWNLOAD_SONG_INFO_ERROR, ERROR_CONFIRMED, FINISH_DOWNLOAD_SONGS,
    UPDATE_LINK,
    UPDATE_SONG
} from "./action-types";
import config from "../config";

export const updateLink = (newLink) => {
    return {
        type: UPDATE_LINK,
        link: newLink
    };
};

export const addSong = (link) => (dispatch) => {
    dispatch({ type: BEGIN_DOWNLOAD_SONG_INFO, link });
    let url = `${config.serverAddress}/videos/info?link=${link}`;
    fetch(url, {
        method: 'GET',
        headers: {
            Accept: 'application/json'
        },
    })
    .then(response => {
        console.log(response);
        if (response.ok) {
            response.json().then(songInfo => {
                dispatch(downloadSongInfoSuccess(songInfo));
            })
        }
        else {
            response.json().then(jsonBody => {
                dispatch(downloadSongInfoError(jsonBody.message));
            })
        }
    })
    .catch((e) => {
        dispatch(downloadSongInfoError(config.download_song_info_error_message))
    });
};

export const downloadSongInfoSuccess = (songInfo) => {
    let song = {
        id: songInfo['video_id'],
        name: songInfo['title'],
        link: songInfo['video_url'],
        formats: songInfo["formats"],
        chosenFormat: songInfo["formats"][0],
        artist: songInfo["author"]['name'],
        duration: songInfo["duration"],
        uploadedAt: songInfo["uploaded_at"],
        channel_url: songInfo["author"]["user_url"]
    };
    return {
        type: ADD_SONG,
        song
    };
};

export const downloadSongInfoError = (errorMessage) => {
    return {
        type: DOWNLOAD_SONG_INFO_ERROR,
        errorMessage
    };
};

export const downloadSongs = (songs) => (dispatch) => {
    dispatch({ type: BEGIN_DOWNLOAD_SONGS});
    for (let song of songs) {
        let url = `${config.serverAddress}/download-video/?link=${song['link']}`;
        fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json'
            },
        })
        .then(response => response.text())
        .then(fileContent => {
            dispatch(downloadSongSuccess(fileContent))
        })
        .catch((err) => {
            console.log(err);
            dispatch(downloadSongError(err))
        });
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


export const deleteSong = (song) => {
    return {
        type: DELETE_SONG,
        song
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
