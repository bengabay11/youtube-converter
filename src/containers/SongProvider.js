import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Song from "../components/Song";
import {updateSongField} from "../actions/actions";

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
            updateField: updateSongField
        },
        dispatch
    );
}

export default connect(
    null,
    mapDispatchToProps
)(Song);