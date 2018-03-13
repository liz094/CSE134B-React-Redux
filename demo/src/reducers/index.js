import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import dishes from './cartReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  dishes,
  ajaxCallsInProgress
});

export default rootReducer;
