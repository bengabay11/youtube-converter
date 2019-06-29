import {connect} from "react-redux/es/alternate-renderers";
import {bindActionCreators} from "redux/es/redux";
import {addSong, updateLink,} from "../actions/actions";
import {NewSongInput} from "../components/NewSongInput";

function mapStateToProps(state) {
    return {
        link: state.songInput.link
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
            updateLink: updateLink,
            addSong: addSong
        },
        dispatch
    );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(NewSongInput);