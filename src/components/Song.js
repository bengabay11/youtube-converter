import React from 'react'
import PropTypes from 'prop-types'
import config from "../config";
import "../styles/song.css"

const getSongById = (id, songs) => {
    for (let song of songs){
        if (song.id === id) {
            return song;
        }
    }

    return undefined;
};

export const Song = ({song, updateField}) => {
    return (
        <div className="song row-center">
            <div className="song-name">{song.name}</div>
            <select className="select-format font" value={song.format}
                    onChange={event => updateField("format", event.target.value)}>
                {config.formats.map(format => {
                    return <option key={format} className="format-option" value={format}>.{format}</option>
                })}
            </select>
            <div className="song-artist">{song.artist}</div>
            <div className="song-duration">{song.duration}</div>
            <div className="song-uploaded-at">{song.uploadedAt}</div>
            <div className="delete-song-button">{config.icons.delete}</div>
        </div>
    );
}

Song.propTypes = {
    song: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        format: PropTypes.oneOf(config.formats),
        artist: PropTypes.string.isRequired,
        duration: PropTypes.number.isRequired,
        uploadedAt: PropTypes.any.isRequired
    }).isRequired,
    updateField: PropTypes.func.isRequired
};

export default Song;