import {ADD_SONG, DELETE_SONG, UPDATE_SONG} from "../actions/action-types";

function songs(state = [], action) {
    switch (action.type) {
        case ADD_SONG:
            return [...state.concat(action.song)];
        case DELETE_SONG:
            return [...state].filter(song => {
                return song.id !== action.id;
            });
        case UPDATE_SONG:
            return [...state].map(song => {
                if (song.id === action.id) {
                    song[action.field] = action.value;
                }
                return song;
            });
        default:
            return state;
    }
}

export default songs;