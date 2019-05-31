import React from 'react'
import PropTypes from 'prop-types'
import "../styles/new-song-form.css"
import AddSong from "../containers/AddSong";
import config from "../config";

export const SongForm = ({loading, error, errorConfirmed}) => {
    return (
        <div className="new-song-form">
            {loading && <div className="loader row-center"/>}
            {error &&
                <div className="download-song-info-error-form column-center font">
                    {config.download_song_info_error_message}
                    <button className="ok-button font" onClick={errorConfirmed}>{config.okButtonContent}</button>
                </div>}
            {(!loading && !error) && <AddSong/>}
        </div>
    );
};


SongForm.propTypes = {
    loading: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
    errorConfirmed: PropTypes.func.isRequired
};

export default SongForm;