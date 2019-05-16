import React from 'react'
import PropTypes from 'prop-types'
import config from "../config";

const getSongById = (id, songs) => {
    for (let song of songs){
        if (song.id === id) {
            return song;
        }
    }

    return undefined;
};

export const Song = ({id, songs, updateField}) => {
    let song = getSongById(id, songs);
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
        </div>
    );
}

Song.propTypes = {
    id: PropTypes.string.isRequired,
    updateField: PropTypes.func.isRequired
};

export default Song;