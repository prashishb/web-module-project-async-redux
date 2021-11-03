import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAnime } from '../actions';

const Anime = ({ anime, isFetching, error, dispatch }) => {
  useEffect(() => {
    dispatch(getAnime());
  }, [dispatch]);

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  if (isFetching) {
    return <h2>Loading Anime...</h2>;
  }

  const handleClick = () => {
    dispatch(getAnime());
  };

  return (
    <div>
      <h2>{anime.title}</h2>
      <img src={anime.images.jpg.image_url} alt={anime.title} />
      <p className='details'>Aired: {anime.aired.string}</p>
      {anime.episodes && <p className='details'>Episodes: {anime.episodes}</p>}
      {anime.score && <p className='details'>Score: {anime.score}</p>}
      <div className='synopsis'>
        <span>{anime.synopsis}</span>
      </div>
      {anime.trailer.embed_url && (
        <div>
          <p className='details'>Trailer: </p>
          <iframe src={anime.trailer.embed_url} title={anime.title} />
        </div>
      )}
      <button onClick={handleClick}>Next</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    anime: state.anime,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps)(Anime);
