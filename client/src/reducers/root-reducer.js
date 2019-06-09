import { combineReducers } from 'redux';
import songs from "./songs-reducer";
import {songInput} from "./song-input-reducer";

export const rootReducer = combineReducers({
    songInput,
    songs
});

export default rootReducer;
