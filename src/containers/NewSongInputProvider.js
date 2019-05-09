import {connect} from "react-redux/es/alternate-renderers";
import {bindActionCreators} from "redux/es/redux";
import {updateLink, updateSongName} from "../actions/actions";
import NewSongInput from "../components/NewSongInput";

function mapStateToProps(state) {
    return {
        songName: state.songInput.songName,
        link: state.songInput.link
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
            updateSongName: updateSongName,
            updateLink: updateLink
        },
        dispatch
    );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(NewSongInput);