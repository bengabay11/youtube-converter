import React from 'react'
import PropTypes from 'prop-types'
import config from "../config";
import "../styles/song.css"
import {formatString, getVideoIdFromLink} from "../services/formatting";

export const Song = ({song, updateField, deleteSong}) => {
    const songFilename = `${song.name}.${song.format}`;
    const videoId = getVideoIdFromLink(song.link);
    const resourcesParams = [videoId, song.name, song.chosenFormat];
    const downloadSongUrl = formatString(config.server.resources.downloadVideo, resourcesParams);
    return (
        <tr className="song row-center">
            <td className="song-name-td songs-table-td">
                <a className="song-link font" href={song.link} target="_blank" rel="noopener noreferrer">
                    {song.name}
                </a>
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
                <a className="song-link font" href={song.channel_url} target="_blank" rel="noopener noreferrer">
                    {song.artist}
                </a>
            </td>
            <td className="song-duration-td songs-table-td font">{song.duration}</td>
            <td className="song-uploaded-at-td songs-table-td font">{song.uploadedAt}</td>
            <td className="songs-table-td download-song-td">
                <a className="fa fa-download download-song-button" download={songFilename}
                href={downloadSongUrl} title={config.buttons.titles.downloadSong}/>
            </td>
            <td className="delete-song-button songs-table-td" title={config.buttons.titles.deleteSong}
                onClick={() => deleteSong(song)}>{config.icons.delete}</td>
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
        duration: PropTypes.string.isRequired,
        uploadedAt: PropTypes.any.isRequired
    }).isRequired,
    updateField: PropTypes.func.isRequired,
    deleteSong: PropTypes.func.isRequired
};