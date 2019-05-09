import {ADD_SONG, DELETE_SONG} from "../actions/action-types";
import {Song} from "../DTOs/Song";
import * as uuid from "uuid";

let initialState = {
    songs: []
};

function songs(state = initialState, action) {
    switch (action.type) {
        case ADD_SONG:
            let songId = uuid();
            let newSong = Song(songId, action.name, action.link);
            return {...state, songs: state.songs.concat(newSong)};
        case DELETE_SONG:
            let newSongs = [...state.songs].filter(song => {
                return song.id !== action.id;
            });
            return {...state, songs: newSongs};
        case
        default:
            return state;
    }
}

export default songs;