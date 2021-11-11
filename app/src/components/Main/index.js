import React from 'react';
import { connect } from 'react-redux';
import ScrollToTop from '../ScrollToTop';
import {
  App,
  AppContainer,
  AnimeTitle,
  AnimeImage,
  LeftSide,
  RightSide,
  LeftSubheadings,
  RightSubheadings,
  AnimeDetails,
  AnimeSynopsis,
  Trailer,
  TrailerNote,
} from './MainElements';

const Main = ({ anime }) => {
  return (
    <App>
      <ScrollToTop />
      <AppContainer>
        <LeftSide>
          <AnimeTitle>{anime.title}</AnimeTitle>
          <AnimeImage
            src={anime.images.jpg.large_image_url}
            alt={anime.title}
          />
          {anime.title_english && (
            <>
              <LeftSubheadings>Alternative Titles:</LeftSubheadings>
              <AnimeDetails>English: {anime.title_english}</AnimeDetails>
              {anime.title_japanese && (
                <AnimeDetails>Japanese: {anime.title_japanese}</AnimeDetails>
              )}
            </>
          )}
          <LeftSubheadings>Information:</LeftSubheadings>
          {anime.score && <AnimeDetails>Score: {anime.score}</AnimeDetails>}
          {anime.type && <AnimeDetails>Type: {anime.type}</AnimeDetails>}
          {anime.year && <AnimeDetails>Aired: {anime.year}</AnimeDetails>}
          {anime.season && (
            <AnimeDetails>
              Season:{' '}
              {anime.season.charAt(0).toUpperCase() + anime.season.slice(1)}
            </AnimeDetails>
          )}
          {anime.episodes && (
            <AnimeDetails>Episodes: {anime.episodes}</AnimeDetails>
          )}
          {anime.duration && (
            <AnimeDetails>Duration: {anime.duration}</AnimeDetails>
          )}
          {anime.genres.length > 0 && (
            <AnimeDetails>
              Genre: {anime.genres.map((genre) => genre.name).join(', ')}
            </AnimeDetails>
          )}
          {anime.source && (
            <AnimeDetails>
              Source:{' '}
              {anime.source
                .split(' ')
                .map((elem) => elem[0].toUpperCase() + elem.substr(1))
                .join(' ')}
            </AnimeDetails>
          )}
        </LeftSide>
        <RightSide>
          {anime.synopsis && (
            <>
              <RightSubheadings>Synopsis:</RightSubheadings>
              <AnimeSynopsis>{anime.synopsis}</AnimeSynopsis>
              {anime.trailer.embed_url && (
                <div>
                  <RightSubheadings>Trailer:</RightSubheadings>
                  <Trailer
                    src={anime.trailer.embed_url.split('&autoplay=1').join('')}
                    title={anime.title}
                  />
                  <TrailerNote>
                    Trailer may be unavailable in certain regions.
                  </TrailerNote>
                </div>
              )}
            </>
          )}
        </RightSide>
      </AppContainer>
    </App>
  );
};

const mapStateToProps = (state) => {
  return {
    anime: state.animeReducer.anime,
  };
};

export default connect(mapStateToProps)(Main);
