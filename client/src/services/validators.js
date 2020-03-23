import {getVideoIdFromURL} from "./formatting";
import config from "../config";

export const validVideoInput = (videoUrl) => {
    videoUrl = new URL(videoUrl);
    if (!getVideoIdFromURL(videoUrl)) {
        throw new Error(config.messages.invalidSongInput);
    }
};