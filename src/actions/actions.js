import {ADD_SONG, DELETE_SONG, UPDATE_FORMAT, UPDATE_LINK, UPDATE_SONG} from "./action-types";

export function updateLink(newLink) {
    return {type: UPDATE_LINK, link: newLink};
}

export function updateFormat(newFormat) {
    return {type: UPDATE_FORMAT, format: newFormat};
}

export function addSong(name, link) {
    return {type: ADD_SONG, name: name, link: link};
}

export function deleteSong(id) {
    return {type: DELETE_SONG, id: id};
}

export function updateSong(id, field, value) {
    return {type: UPDATE_SONG, id: id, field: field, value: value};
}