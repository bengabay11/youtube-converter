import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Song from "../components/Song";
import {deleteSong, updateSongField} from "../actions/actions";

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
            updateField: updateSongField,
            deleteSong: deleteSong
        },
        dispatch
    );
};

export default connect(
    null,
    mapDispatchToProps
)(Song);