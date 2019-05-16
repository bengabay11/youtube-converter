import {ADD_SONG, DELETE_SONG, UPDATE_SONG} from "../actions/action-types";

let initialState = {
    songs: []
};

function songs(state = initialState, action) {
    let newSongs = [];
    switch (action.type) {
        case ADD_SONG:
            return {...state, songs: state.songs.concat(action.song)};
        case DELETE_SONG:
            newSongs = [...state.songs].filter(song => {
                return song.id !== action.id;
            });
            return {...state, songs: newSongs};
        case UPDATE_SONG:
            newSongs = [...state.songs].map(song => {
                if (song.id === action.id) {
                    song[action.field] = action.value;
                }
                return song;
            });
            return {...state, songs: newSongs};
        default:
            return state;
    }
}

export default songs;