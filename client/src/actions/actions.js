import {
    ADD_SONG,
    BEGIN_DOWNLOAD_SONG_INFO,
    DELETE_SONG, DOWNLOAD_SONG_INFO_ERROR, ERROR_CONFIRMED,
    UPDATE_LINK,
    UPDATE_SONG
} from "./action-types";
import config from "../config";
import {formatString} from "../services/formatting";
import {handleResponse, sendHttpRequest} from "../services/ajax";

export const updateLink = (newLink) => {
    return {
        type: UPDATE_LINK,
        link: newLink
    };
};

export const addSong = songId => async dispatch => {
    dispatch({ type: BEGIN_DOWNLOAD_SONG_INFO, songId });
    const url = config.server.url + formatString(config.server.resources.getVideoInfo, [songId]);
    const callbackError = () => dispatch(downloadSongInfoError(config.messages.download_song_info_error_message));
    const statusOptions = {
        200: responseBody => dispatch(downloadSongInfoSuccess(responseBody)),
        500: responseBody => dispatch(downloadSongInfoError(responseBody))
    };
    const response = await sendHttpRequest(url,"GET", undefined, undefined, {}, callbackError);
    if (response) {
        await handleResponse(response, statusOptions);
    }
};

export const downloadSongInfoSuccess = (songInfo) => {
    const song = {
        id: songInfo['video_id'],
        name: songInfo['title'],
        link: songInfo['video_url'],
        formats: songInfo["formats"],
        chosenFormat: songInfo["formats"][0],
        artist: songInfo["author"]['name'],
        duration: songInfo["duration"],
        uploadedAt: songInfo["uploaded_at"],
        channel_url: songInfo["channel_url"]
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
