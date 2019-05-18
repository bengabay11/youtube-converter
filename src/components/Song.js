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

export const Song = ({song, updateField, deleteSong}) => {
    return (
        <tr className="song row-center">
            <td className="song-name songs-table-td">{song.name}</td>
            <td className="songs-table-td">
                <select className="font" value={song.format}
                        onChange={event => updateField("format", event.target.value)}>
                    {config.formats.map(format => {
                        return <option key={format} className="format-option" value={format}>.{format}</option>
                    })}
                </select>
            </td>
            <td className="song-artist songs-table-td">{song.artist}</td>
            <td className="song-duration songs-table-td">{song.duration}</td>
            <td className="song-uploaded-at songs-table-td">{song.uploadedAt}</td>
            <td className="delete-song-button" onClick={deleteSong}>{config.icons.delete}</td>
        </tr>
    );
};

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
    updateField: PropTypes.func.isRequired,
    deleteSong: PropTypes.func.isRequired
};

export default Song;