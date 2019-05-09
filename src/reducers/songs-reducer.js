import {ADD_SONG} from "../actions/action-types";

let initialState = {
    songs: []
};

function songs(state = initialState, action) {
    switch (action.type) {
        case ADD_SONG:
            let newSong = "";
            return {...state, songs: state.songs.concat(newSong)};
        default:
            return state;
    }
}