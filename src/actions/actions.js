import {ADD_SONG, DELETE_SONG, UPDATE_FORMAT, UPDATE_LINK, UPDATE_SONG} from "./action-types";
import {getSongInfoFromYoutube} from "../services/youtube-song-info";

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

export function addSong(link, format) {
    // getSongInfoFromYoutube(link).then(songInfo => {
    //     let newSong = Song(songInfo.id, songInfo.title, link, format, songInfo.artist,
    //         songInfo.uploadedAt, songInfo.duration);
    //     return {
    //         type: ADD_SONG,
    //         song: newSong
    //     };
    // });
    return {
        type: ADD_SONG
    };
}

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