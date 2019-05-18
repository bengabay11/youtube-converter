import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Songs} from "../components/Songs";
import {deleteSong} from "../actions/actions";

function mapStateToProps(state) {
    return {
        songs: state.songs
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
            deleteSong: deleteSong
        },
        dispatch
    );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Songs);