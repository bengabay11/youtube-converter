import {connect} from "react-redux/es/alternate-renderers";
import {bindActionCreators} from "redux/es/redux";
import {addSong, updateLink,} from "../actions/actions";
import NewSongInput from "../components/NewSongInput";

const mapStateToProps = state => ({
        link: state.songInput.link
});

const mapDispatchToProps = dispatch => bindActionCreators({
        updateLink: updateLink,
        addSong: addSong
    },
    dispatch
);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(NewSongInput);