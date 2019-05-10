import React from 'react'
import PropTypes from 'prop-types'
import config from "../config";

export const Song = ({name, format, artist, duration, uploadedAt}) => (
    <div className="song">
        
    </div>
);

Song.propTypes = {
    name: PropTypes.string.isRequired,
    format: PropTypes.oneOf(config.formats).isRequired,
    artist: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    uploadedAt: PropTypes.string.isRequired
};

export default Song;