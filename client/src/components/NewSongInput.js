import config from "../config";
import React from "react";
import PropTypes from "prop-types";
import {getVideoIdFromURL} from "../services/formatting";
import {validVideoInput} from "../services/validators";

const NewSongInput = ({songs, link, updateLink, addSong}) => {
    const validSongExistence = (songId) => {
        songs.forEach(song => {
            if (song.id === songId) throw new Error(config.messages.songAlreadyExist)
        });
    };
    const tryAddSong = () => {
        try {
            validVideoInput(link);
            const songId = getVideoIdFromURL(link);
            validSongExistence(songId);
            addSong(songId);
        } catch (e) {
            alert(e.message)
        }
    };
    const checkLinkEntered = (event) => {
        const key = event.key;
        if (key === config.enterKey) {
            tryAddSong();
        }
    };
    return (
        <div className="column-center">
            <input type="text" className="song-link-input font" value={link} autoFocus spellCheck={false}
                   onKeyDown={checkLinkEntered}
                   onChange={event => updateLink(event.target.value)} placeholder={config.placeHolders.songLinkInput}/>
            <button id="add-song-button" className="song-form-button font"
                    onClick={tryAddSong}>{config.buttons.contents.addSong}</button>
        </div>
    );
};

NewSongInput.propTypes = {
    link: PropTypes.string.isRequired,
    updateLink: PropTypes.func.isRequired,
    addSong: PropTypes.func.isRequired
};

export default NewSongInput;