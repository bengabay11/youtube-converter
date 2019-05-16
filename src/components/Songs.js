import React from 'react'
import PropTypes from 'prop-types'
import config from "../config";
import SongProvider from "../containers/SongProvider";

export const Songs = ({songs, deleteSong}) => {
    return (
        <div className="songs">
            {songs.map(song => {
                return <SongProvider id={song.id}/>
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