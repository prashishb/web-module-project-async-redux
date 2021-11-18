import {
  FETCH_SEARCH_START,
  FETCH_SEARCH_SUCCESS,
  FETCH_SEARCH_ERROR,
} from '../actions/searchActions';

const initialState = {
  anime: [],
  error: '',
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SEARCH_START:
      return {
        ...state,
        error: '',
        anime: [],
      };
    case FETCH_SEARCH_SUCCESS:
      return {
        ...state,
        error: '',
        anime: action.payload,
      };
    case FETCH_SEARCH_ERROR:
      return {
        ...state,
        error: action.payload,
        anime: [],
      };
    default:
      return state;
  }
};

export default searchReducer;
