import React from 'react'
import PropTypes from 'prop-types'
import config from "../config";
import "../styles/new-song-input.css"

export const NewSongInput = ({link, format, updateLink, updateFormat, addSong}) => {
    return (
        <div className="new-song-input column-center">
            <input type="text" className="song-link-input" value={link}
                   onChange={event => updateLink(event.target.value)} placeholder={config.songLinkInputPlaceHolder}/>
            <select className="select-format" value={format} onChange={event => updateFormat(event.target.value)}>
                {config.formats.map(format => {
                    return <option key={format} className="format-option" value={format}>.{format}</option>
                })}
            </select>
            <button className="add-song-button" onClick={addSong}>{config.addSongButtonText}</button>
        </div>
    );
};


NewSongInput.propTypes = {
    link: PropTypes.string.isRequired,
    format: PropTypes.oneOf(config.formats).isRequired,
    updateLink: PropTypes.func.isRequired,
    updateFormat: PropTypes.func.isRequired,
    addSong: PropTypes.func.isRequired
};

export default NewSongInput;