import React from 'react'
import PropTypes from 'prop-types'
import config from "../config";

export const Songs = ({songs, deleteSong}) => {
    return (
        <div className="songs">
            {songs.map(song => {
                So
            })};
        </div>
    )
};

Songs.propTypes = {
    songs: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        format: PropTypes.oneOf(config.formats).isRequired,
        artist: PropTypes.string.isRequired,
        length: PropTypes.number.isRequired,
    })),
    deleteSong: PropTypes.func.isRequired,
};

export default Songs;