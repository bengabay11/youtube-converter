import React from 'react'
import PropTypes from 'prop-types'
import config from "../config";
import SongProvider from "../containers/SongProvider";
import "../styles/songs.css"
import * as uuid from "uuid";

export const Songs = ({songs, headers}) => {
    return (
        <div className="songs row-center">
            <table className="songs-table">
                <thead>
                    <tr className="headers row-center">
                        {headers.map(header => {
                            return (
                                <th key={uuid()} className="songs-table-th">{header}</th>
                            );
                        })}
                </tr>
                </thead>
                <tbody>
                    {songs.map(song => {
                        return (
                            <SongProvider key={uuid()} id={song.id} songs={songs}/>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
};

Songs.propTypes = {
    songs: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        format: PropTypes.oneOf(config.formats),
        artist: PropTypes.string.isRequired,
        duration: PropTypes.string.isRequired,
        uploadedAt: PropTypes.any.isRequired
    })),
    headers: PropTypes.array.isRequired,
};

export default Songs;