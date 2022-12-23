import { combineReducers } from 'redux';
import usersReducer from './users';
import photosReducer from './photos';

const rootReducer = combineReducers({
  usersReducer,
  photosReducer,
});
export default rootReducer;
