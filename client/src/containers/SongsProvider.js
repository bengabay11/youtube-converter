import {connect} from "react-redux";
import {Songs} from "../components/Songs";
import {bindActionCreators} from "redux";
import {downloadSongs} from "../actions/actions";

function mapStateToProps(state) {
    return {
        songs: state.songs
    }
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
    mapDispatchToProps
)(Songs);