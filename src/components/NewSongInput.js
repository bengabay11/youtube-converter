import React from 'react'
import PropTypes from 'prop-types'
import config from "../config";

export const NewSongInput = ({link, updateLink}) => (
    <div>
        <input type="text" className="song-link-input" value={link}
               onChange={(event) => updateLink(event.target.value)} placeholder={config.songLinkInputPlaceHolder}/>
    </div>
);


NewSongInput.propTypes = {
    link: PropTypes.string.isRequired,
    updateLink: PropTypes.func.isRequired
};

export default NewSongInput;