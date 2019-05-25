import {ADD_SONG, BEGIN_DOWNLOAD_SONG_INFO, UPDATE_FORMAT, UPDATE_LINK} from "../actions/action-types";
import config from "../config";

let initialState = {
    link: "",
    format: config.defaultFormat,
    loading: false
};

export function songInput(state = initialState, action) {
    switch (action.type) {
        case UPDATE_LINK:
            return {...state, link: action.link};
        case UPDATE_FORMAT:
            return {...state, format: action.format};
        case BEGIN_DOWNLOAD_SONG_INFO:
            return {...state, loading: true};
        case ADD_SONG:
            return {...state, loading: false};
        default:
            return state;
    }
}

export default songInput;