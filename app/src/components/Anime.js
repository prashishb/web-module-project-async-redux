import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAnime } from '../actions';

const Anime = ({ anime, isFetching, error, dispatch }) => {
  useEffect(() => {
    dispatch(getAnime());
  }, [dispatch]);

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  if (isFetching) {
    return <h1>Loading Anime...</h1>;
  }

  return (
    <div className='App'>
      <div className='container'>
        <div className='left'>
          <h2>{anime.title}</h2>
          <img src={anime.images.jpg.large_image_url} alt={anime.title} />
          {anime.title_english && (
            <>
              <p className='subheadings info'>Alternative Titles:</p>
              <p className='details'>English: {anime.title_english}</p>
              {anime.title_japanese && (
                <p className='details'>Japanese: {anime.title_japanese}</p>
              )}
            </>
          )}
          <p className='subheadings info'>Information:</p>
          {anime.type && <p className='details'>Type: {anime.type}</p>}
          {anime.year && <p className='details'>Aired: {anime.year}</p>}
          {anime.season && <p className='details'>Season: {anime.season}</p>}
          {anime.episodes && (
            <p className='details'>Episodes: {anime.episodes}</p>
          )}
          {anime.duration && (
            <p className='details'>Duration: {anime.duration}</p>
          )}
          {anime.genres && (
            <p className='details'>
              Genres: {anime.genres.map((genre) => genre.name).join(', ')}
            </p>
          )}
          {anime.score && <p className='details'>Score: {anime.score}</p>}
        </div>
        <div className='right'>
          {anime.synopsis && (
            <>
              <p className='subheadings'>Synopsis:</p>
              <p className='synopsis'>{anime.synopsis}</p>
              {anime.trailer.embed_url && (
                <div>
                  <p className='subheadings'>Trailer:</p>
                  <iframe src={anime.trailer.embed_url} title={anime.title} />
                </div>
              )}
            </>
          )}
        </div>
      </div>
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
