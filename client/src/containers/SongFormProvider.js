import {connect} from "react-redux/es/alternate-renderers";
import SongForm from "../components/SongForm";
import {bindActionCreators} from "redux";
import {errorConfirmed} from "../actions/actions";

const mapStateToProps = state => {
    return {
        isLoading: state.songInput.isLoading,
        isError: state.songInput.isError,
        errorMessage: state.songInput.errorMessage
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
            errorConfirmed: errorConfirmed
        },
        dispatch
    );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SongForm);