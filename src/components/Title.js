import React from 'react'
import PropTypes from 'prop-types'
import "../styles/title.css"

export const Title = ({content}) => {
    return (
        <div className="title font">
            {content}
        </div>
    );
};

Title.propTypes = {
    content: PropTypes.string.isRequired
};

export default Title;