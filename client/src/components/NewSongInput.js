import config from "../config";
import React from "react";
import PropTypes from "prop-types";
import {getVideoIdFromLink} from "../services/formatting";
import _ from 'lodash';

const NewSongInput = ({songs, link, updateLink, addSong}) => {
    const checkLinkEntered = (event) => {
        const key = event.key;
        if (key === config.enterKey) {
            validInput();
        }
    };
    const validInput = () => {
        if (_.isEmpty(link)) {
            alert(config.messages.invalidSongInput)
        }
        else{
            checkSongExist(link);
        }
    };
    const checkSongExist = (videoLink) => {
        const songIds = songs.map(song => song.id);
        const songId = getVideoIdFromLink(videoLink);
        if (songIds.includes(songId)) {
            alert(config.messages.songAlreadyExist)
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
                    onClick={validInput}>{config.buttons.contents.addSong}</button>
        </div>
    );
};

NewSongInput.propTypes = {
    link: PropTypes.string.isRequired,
    updateLink: PropTypes.func.isRequired,
    addSong: PropTypes.func.isRequired
};

export default NewSongInput;