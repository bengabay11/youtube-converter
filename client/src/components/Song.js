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

export const Song = ({id, songs, updateField, deleteSong}) => {
    let song = getSongById(id, songs);
    let songFilename = `${song['name']}.${song['format']}`;
    let songUrl = `${config.serverAddress}/videos/download?link=${song['link']}&name=${song.name}&format=${song.chosenFormat}`;
    return (
        <tr className="song row-center">
            <td className="song-name-td songs-table-td">
                <a className="song-link font" href={song.link} target="_blank">{song.name}</a>
            </td>
            <td className="song-format-td songs-table-td">
                <select className="font" value={song.chosenFormat}
                        onChange={event => updateField(song.id, "chosenFormat", event.target.value)}>
                    {song.formats.map(format => {
                        return <option key={format} className="format-option" value={format}>.{format}</option>
                    })}
                </select>
            </td>
            <td className="song-artist-td songs-table-td">
                <a className="song-link font" href={song.channel_url} target="_blank">{song.artist}</a>
            </td>
            <td className="song-duration-td songs-table-td">{song.duration}</td>
            <td className="song-uploaded-at-td songs-table-td">{song.uploadedAt}</td>
            <td className="songs-table-td download-song-td">
                <a className="fa fa-download download-song-button" download={songFilename}
                href={songUrl} title={config.downloadSongsButtonTitle}/>
            </td>
            <td className="delete-song-button songs-table-td" onClick={() => deleteSong(song.id)}>{config.icons.delete}</td>
        </tr>
    );
};

Song.propTypes = {
    id: PropTypes.string.isRequired,
    songs: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        format: PropTypes.oneOf(config.formats),
        artist: PropTypes.string.isRequired,
        duration: PropTypes.string.isRequired,
        uploadedAt: PropTypes.any.isRequired
    }).isRequired).isRequired,
    updateField: PropTypes.func.isRequired,
    deleteSong: PropTypes.func.isRequired
};

export default Song;