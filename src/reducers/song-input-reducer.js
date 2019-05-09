import {ADD_SONG, UPDATE_LINK, UPDATE_SONG_NAME} from "../actions/action-types";

let initialState = {
    songName: "",
    link: ""
};

export function songInputReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_SONG_NAME:
            return {...state, name: action.songName};
        case UPDATE_LINK:
            return {...state, link: action.link};
        default:
            return state;
    }
}

export default songInputReducer;