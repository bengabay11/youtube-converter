import {connect} from "react-redux/es/alternate-renderers";
import {bindActionCreators} from "redux/es/redux";
import {downloadSongs} from "../actions/actions";
import {DownloadSongsButton} from "../components/DownloadSongsButton";

function mapStateToProps(state) {
    return {
        songs: state.songs
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        downloadSongs: downloadSongs
        },
        dispatch
    );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(DownloadSongsButton);