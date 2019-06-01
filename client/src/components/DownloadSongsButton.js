import config from "../config";
import React from "react";
import PropTypes from "prop-types";

export const DownloadSongsButton = ({songs, downloadSongs}) => {
    return (
        <div className="download-songs-button-section row-center font">
            Songs: ({songs.length})
            {/*{currentSong ?*/}
                {/*<button className="fa fa-download download-songs-button" download={currentSongFilename}*/}
                        {/*href={currentSongUrl} title={config.downloadSongsButtonTitle}*/}
                        {/*onClick={() => downloadSongs(songs)}/>*/}
                {/*:*/}
                {/*<button className="fa fa-download download-songs-button"*/}
                        {/*title={config.downloadSongsButtonTitle} onClick={() => downloadSongs(this, songs)}/>*/}
            {/*}*/}
        </div>
    );
};

DownloadSongsButton.propTypes = {
    songs: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        format: PropTypes.oneOf(config.formats),
        artist: PropTypes.string.isRequired,
        duration: PropTypes.string.isRequired,
        uploadedAt: PropTypes.any.isRequired
    }).isRequired).isRequired,
    downloadSongs: PropTypes.func.isRequired
};