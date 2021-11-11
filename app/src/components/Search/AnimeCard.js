import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getAnimeById } from '../../actions/animeActions';
import ScrollToTop from '../ScrollToTop';
import {
  AnimeContainer,
  AnimeListWrap,
  AnimeItemContainer,
  AnimePoster,
  AnimeScoreBanner,
  AnimeScore,
  AnimeInfo,
  AnimeImage,
  AnimeTitle,
} from './SearchElements';

const AnimeCard = ({ anime, dispatch }) => {
  const history = useHistory();

  const handleClick = (e) => {
    dispatch(getAnimeById(e.target.id));
    history.push(`/`);
  };
  return (
    <>
      <ScrollToTop />
      <AnimeContainer>
        <AnimeListWrap>
          <AnimeItemContainer id={anime.mal_id}>
            <AnimePoster id={anime.mal_id} onClick={handleClick}>
              {anime.score && (
                <AnimeScoreBanner>
                  <AnimeScore>{anime.score.toFixed(1)}</AnimeScore>
                </AnimeScoreBanner>
              )}
              <AnimeImage
                src={anime.images.jpg.large_image_url}
                alt={anime.title}
                id={anime.mal_id}
              />
            </AnimePoster>
            <AnimeInfo>
              <AnimeTitle id={anime.mal_id}>
                {anime.title.replace(/(.{30})...+/, '$1...')}
              </AnimeTitle>
            </AnimeInfo>
          </AnimeItemContainer>
        </AnimeListWrap>
      </AnimeContainer>
    </>
  );
};

export default connect(null)(AnimeCard);
