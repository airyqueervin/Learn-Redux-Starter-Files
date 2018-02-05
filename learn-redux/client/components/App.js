import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreator';
import Main from './Main';


function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  }
}
function mapDispatchedProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchedProps)(Main);

export default App;
