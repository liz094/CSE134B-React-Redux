import {combineReducers} from 'redux';
import dishes from './cartReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  dishes,
  ajaxCallsInProgress
});

export default rootReducer;
