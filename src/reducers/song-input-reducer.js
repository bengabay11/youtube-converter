import {UPDATE_LINK, UPDATE_SONG_NAME} from "../actions/action-types";

let initialState = {
    songName: "",
    link: ""
};

export function songInput(state = initialState, action) {
    switch (action.type) {
        case UPDATE_SONG_NAME:
            return {...state, songName: action.songName};
        case UPDATE_LINK:
            return {...state, link: action.link};
        default:
            return state;
    }
}

export default songInput;