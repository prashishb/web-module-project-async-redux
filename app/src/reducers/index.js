import animeReducer from './animeReducer';
import searchReducer from './searchReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  animeReducer,
  searchReducer,
});
