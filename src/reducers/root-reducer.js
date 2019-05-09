import { combineReducers } from 'redux';
import {songInputReducer} from "./song-input-reducer";
import songs from "./songs-reducer";

export const rootReducer = combineReducers({
    songInputReducer,
    songs
});

export default rootReducer;
