import React from 'react'
import PropTypes from 'prop-types'
import "../styles/new-song-form.css"
import AddSong from "../containers/AddSong";

export const SongForm = ({loading}) => {
    return (
        <div className="new-song-form">
            {!loading && <AddSong/>}
            {loading && <div className="loader"/>}
        </div>
    );
};


SongForm.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default SongForm;