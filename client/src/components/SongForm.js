import "../styles/new-song-form.css"
import NewSongInputProvider from "../containers/NewSongInputProvider";
import config from "../config";
import React from "react"
import * as PropTypes from "prop-types";

const SongForm = ({isLoading, isError, errorMessage, errorConfirmed}) => (
    <div className="new-song-form">
        {isLoading && <div className="loader row-center"/>}
        {isError &&
            <div id="download-song-info-error-form" className="column-center font">
                {errorMessage}
                <button id="ok-button" className="song-form-button font" onClick={errorConfirmed}>
                    {config.buttons.contents.ok}
                </button>
            </div>}
        {(!isLoading && !isError) && <NewSongInputProvider/>}
    </div>
);


SongForm.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    isError: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string.isRequired,
    errorConfirmed: PropTypes.func.isRequired
};

export default SongForm;