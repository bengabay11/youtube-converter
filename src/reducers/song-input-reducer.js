import {UPDATE_FORMAT, UPDATE_LINK} from "../actions/action-types";
import config from "../config";

let initialState = {
    link: "",
    format: config.defaultFormat
};

export function songInput(state = initialState, action) {
    switch (action.type) {
        case UPDATE_LINK:
            return {...state, link: action.link};
        case UPDATE_FORMAT:
            return {...state, format: action.format};
        default:
            return state;
    }
}

export default songInput;