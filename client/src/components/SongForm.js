import React from 'react'
import PropTypes from 'prop-types'
import "../styles/new-song-form.css"
import AddSong from "../containers/AddSong";
import config from "../config";

export const SongForm = ({isLoading, isError, errorMessage, errorConfirmed}) => {
    return (
        <div className="new-song-form">
            {isLoading && <div className="loader row-center"/>}
            {isError &&
                <div className="download-song-info-error-form column-center font">
                    {errorMessage}
                    <button className="ok-button song-form-button font" onClick={errorConfirmed}>{config.okButtonContent}</button>
                </div>}
            {(!isLoading && !isError) && <AddSong/>}
        </div>
    );
};


SongForm.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    isError: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string.isRequired,
    errorConfirmed: PropTypes.func.isRequired
};

export default SongForm;