import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { getAnimeById } from '../../actions/animeActions';

import {
  SidebarContainer,
  Aside,
  Nav,
  Heading,
  AnimeLinks,
} from './SidebarElements';

function Sidebar({ dispatch }) {
  const [topAnime, setTopAnime] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get('https://api.jikan.moe/v3/top/anime/1/airing')
  //     .then((res) => {
  //       setTopAnime(res.data.top.slice(0, 10));
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }, []);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        'https://api.jikan.moe/v3/top/anime/1/airing'
      );
      setTopAnime(res.data.top.slice(0, 10));
    }
    fetchData();
  }, []);

  const history = useHistory();
  const handleClick = (e) => {
    dispatch(getAnimeById(e.target.id));
    history.push('/');
  };

  return (
    <SidebarContainer>
      <Aside>
        <Nav>
          <Heading>Top Airing Anime</Heading>
          {topAnime.map((anime) => (
            <AnimeLinks
              key={anime.mal_id}
              id={anime.mal_id}
              onClick={handleClick}>
              {anime.title}
            </AnimeLinks>
          ))}
        </Nav>
      </Aside>
    </SidebarContainer>
  );
}

const mapStateToProps = (state) => {
  return {
    anime: state.animeReducer.anime,
  };
};

export default connect(mapStateToProps)(Sidebar);
