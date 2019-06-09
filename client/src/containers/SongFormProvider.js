import {connect} from "react-redux/es/alternate-renderers";
import SongForm from "../components/SongForm";
import {bindActionCreators} from "redux";
import {errorConfirmed} from "../actions/actions";

function mapStateToProps(state) {
    return {
        loading: state.songInput.loading,
        error: state.songInput.error
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
            errorConfirmed: errorConfirmed
        },
        dispatch
    );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SongForm);