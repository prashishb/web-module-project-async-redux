import axios from 'axios';

export const FETCH_SEARCH_START = 'FETCH_SEARCH_START';
export const FETCH_SEARCH_SUCCESS = 'FETCH_SEARCH_SUCCESS';
export const FETCH_SEARCH_ERROR = 'FETCH_SEARCH_ERROR';

export const searchAnime = (query) => {
  return (dispatch) => {
    dispatch({ type: FETCH_SEARCH_START });
    axios
      .get(
        `https://api.jikan.moe/v4/anime?q=${query}&order_by=popularity&sort=asc&limit=200`
      )
      .then((res) => {
        if (
          !Array.isArray(res.data.data) ||
          !res.data.data ||
          res.data.data === [] ||
          res.data.data.length === 0 ||
          res.data.data === 0
        ) {
          dispatch({ type: FETCH_SEARCH_ERROR, payload: 'No results found' });
        } else {
          dispatch({ type: FETCH_SEARCH_SUCCESS, payload: res.data.data });
        }
      })
      .catch((err) => {
        dispatch({ type: FETCH_SEARCH_ERROR, payload: err });
      });
  };
};

//V3 API
// axios
//   .get(
//     `https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`
//   )
//   .then((res) => {
//     if (
//       !Array.isArray(res.data.results) ||
//       !res.data.results ||
//       res.data.results === [] ||
//       res.data.results.length === 0 ||
//       res.data.results === 0
//     ) {
//       dispatch({ type: FETCH_SEARCH_ERROR, payload: 'No results found' });
//     } else {
//       dispatch({ type: FETCH_SEARCH_SUCCESS, payload: res.data.results });
//     }
//   })
//   .catch((err) => {
//     dispatch({ type: FETCH_SEARCH_ERROR, payload: err });
//   });
