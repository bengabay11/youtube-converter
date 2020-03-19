import config from "../config";
import React from "react";
import PropTypes from "prop-types";

const NewSongInput = ({link, updateLink, addSong}) => {
    const checkLinkEntered = (event) => {
        const key = event.key;
        if (key === config.enterKey) {
            addSong(link);
        }
    };
    return (
        <div className="column-center">
            <input type="text" className="song-link-input font" value={link} autoFocus spellCheck={false}
                   onKeyDown={checkLinkEntered}
                   onChange={event => updateLink(event.target.value)} placeholder={config.placeHolders.songLinkInput}/>
            <button id="add-song-button" className="song-form-button font"
                    onClick={event => addSong(link)}>{config.buttons.contents.addSong}</button>
        </div>
    );
};

NewSongInput.propTypes = {
    link: PropTypes.string.isRequired,
    updateLink: PropTypes.func.isRequired,
    addSong: PropTypes.func.isRequired
};

export default NewSongInput;