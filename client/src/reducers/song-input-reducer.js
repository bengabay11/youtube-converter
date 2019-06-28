import {
    ADD_SONG,
    BEGIN_DOWNLOAD_SONG_INFO,
    DOWNLOAD_SONG_INFO_ERROR, ERROR_CONFIRMED,
    UPDATE_FORMAT,
    UPDATE_LINK
} from "../actions/action-types";
import config from "../config";

let initialState = {
    link: "",
    format: config.defaultFormat,
    isLoading: false,
    isError: false,
    errorMessage: ""
};

export function songInput(state = initialState, action) {
    switch (action.type) {
        case UPDATE_LINK:
            return {...state, link: action.link};
        case UPDATE_FORMAT:
            return {...state, format: action.format};
        case BEGIN_DOWNLOAD_SONG_INFO:
            return {...state, isLoading: true};
        case DOWNLOAD_SONG_INFO_ERROR:
            return {...state, isError: true, isLoading: false, errorMessage: action.errorMessage};
        case ERROR_CONFIRMED:
            return {...state, isError: false};
        case ADD_SONG:
            return {...state, isLoading: false, link: ""};
        default:
            return state;
    }
}

export default songInput;