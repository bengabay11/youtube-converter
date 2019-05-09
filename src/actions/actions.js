import {ADD_SONG, UPDATE_LINK} from "./action-types";

export function updateLink(newLink) {
    return {type: UPDATE_LINK, link: newLink};
}

export function updateSongName(newSongName) {
    return {type: UPDATE_LINK, songName: newSongName};
}

export function addSong() {
    return {type: ADD_SONG};
}