import {connect} from "react-redux/es/alternate-renderers";
import DownloadSongForm from "../components/DownloadSongForm";
import {bindActionCreators} from "redux";
import {errorConfirmed} from "../actions/actions";

const mapStateToProps = state => ({
    isLoading: state.songInput.isLoading,
    isError: state.songInput.isError,
    errorMessage: state.songInput.errorMessage
});

const mapDispatchToProps = dispatch => bindActionCreators({ errorConfirmed: errorConfirmed }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(DownloadSongForm);