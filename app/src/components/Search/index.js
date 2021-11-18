import React from 'react';
import { connect } from 'react-redux';
import AnimeCard from './AnimeCard';
import { AnimeListSection, LoadErrorImage } from './SearchElements';
import errorImg from '../../images/error.png';

const SearchResults = ({ searchResults, searchError }) => {
  if (searchError) {
    return <LoadErrorImage src={errorImg} alt={searchError} />;
  }

  return (
    <AnimeListSection>
      {searchResults.map((anime) => (
        <AnimeCard key={anime.mal_id} anime={anime} id={anime.mal_id} />
      ))}
    </AnimeListSection>
  );
};

const mapStateToProps = (state) => {
  return {
    searchResults: state.searchReducer.anime,
    searchError: state.searchReducer.error,
  };
};

export default connect(mapStateToProps)(SearchResults);
