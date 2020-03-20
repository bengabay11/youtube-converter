import config from "../config";
import React from "react";
import PropTypes from "prop-types";
import {getVideoIdFromLink} from "../services/formatting";

const NewSongInput = ({songs, link, updateLink, addSong}) => {
    const checkLinkEntered = (event) => {
        const key = event.key;
        if (key === config.enterKey) {
            checkSongExist();
        }
    };
    const checkSongExist = () => {
        const songIds = songs.map(song => song.id);
        const songId = getVideoIdFromLink(link);
        if (songIds.includes(songId)) {
            alert("Song already exist!")
        }
        else {
            addSong(songId);
        }
    };
    return (
        <div className="column-center">
            <input type="text" className="song-link-input font" value={link} autoFocus spellCheck={false}
                   onKeyDown={checkLinkEntered}
                   onChange={event => updateLink(event.target.value)} placeholder={config.placeHolders.songLinkInput}/>
            <button id="add-song-button" className="song-form-button font"
                    onClick={checkSongExist}>{config.buttons.contents.addSong}</button>
        </div>
    );
};

NewSongInput.propTypes = {
    link: PropTypes.string.isRequired,
    updateLink: PropTypes.func.isRequired,
    addSong: PropTypes.func.isRequired
};

export default NewSongInput;