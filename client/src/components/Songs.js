import React from 'react'
import PropTypes from 'prop-types'
import config from "../config";
import SongProvider from "../containers/SongProvider";
import "../styles/songs.css"
import * as uuid from "uuid";

export const Songs = ({songs, headers}) => (
    <div className="songs column-center">
        <div className="songs-table-title row-center">
            <div className="font songs-counter">
                Songs: ({songs.length})
            </div>
        </div>
        <table className="songs-table">
            <thead>
                <tr className="headers row-center">
                    {headers.map(header => {
                        const headerClassName = `header${headers.indexOf(header)+1}`;
                        return (
                            <th key={uuid()} className={`songs-table-th ${headerClassName}`}>{header}</th>
                        );
                    })}
            </tr>
            </thead>
            <div className="songs-table-body scrollbar">
                <tbody>
                {songs.map(song => {
                    return (
                        <SongProvider key={uuid()} song={song}/>
                    )
                })}
                </tbody>
            </div>
        </table>
    </div>
);

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