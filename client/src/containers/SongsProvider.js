import {connect} from "react-redux";
import Songs from "../components/Songs";

const mapStateToProps = state => ({ songs: state.songs });

export default connect(
    mapStateToProps
)(Songs);