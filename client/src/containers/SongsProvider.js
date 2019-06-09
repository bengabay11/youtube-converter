import {connect} from "react-redux";
import {Songs} from "../components/Songs";

function mapStateToProps(state) {
    return {
        songs: state.songs
    }
}

export default connect(
    mapStateToProps,
    null
)(Songs);