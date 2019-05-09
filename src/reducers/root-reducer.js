import { combineReducers } from 'redux';
import {songInputReducer} from "./song-input-reducer";

export const rootReducer = combineReducers({
    songInput: songInputReducer
});

export default rootReducer;
