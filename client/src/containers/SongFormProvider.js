import {connect} from "react-redux/es/alternate-renderers";
import SongForm from "../components/SongForm";

function mapStateToProps(state) {
    return {
        loading: state.songInput.loading
    };
}

export default connect(
    mapStateToProps,
    null,
)(SongForm);