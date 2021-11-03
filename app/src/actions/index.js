import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';

export const getAnime = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    axios
      .get('https://api.jikan.moe/v4/random/anime')
      .then((res) => {
        dispatch(fetchSuccess(res.data.data));
      })
      .catch((err) => {
        dispatch(fetchError(err));
      });
  };
};

export const fetchStart = () => ({
  type: FETCH_START,
});

export const fetchSuccess = (anime) => ({
  type: FETCH_SUCCESS,
  payload: anime,
});

export const fetchError = (error) => ({
  type: FETCH_ERROR,
  payload: error,
});
