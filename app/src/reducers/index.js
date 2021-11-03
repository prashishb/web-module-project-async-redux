import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR } from '../actions';

const initialState = {
  anime: {
    images: {
      jpg: {
        image_url: '',
      },
    },
    title: '',
    synopsis: '',
    episodes: '',
    score: '',
    aired: {
      string: '',
    },
    trailer: {
      url: '',
      embed_url: '',
    },
  },
  isFetching: false,
  error: '',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        anime: {},
        isFetching: true,
        error: '',
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        anime: action.payload,
        isFetching: false,
        error: '',
      };
    case FETCH_ERROR:
      return {
        ...state,
        anime: {},
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
