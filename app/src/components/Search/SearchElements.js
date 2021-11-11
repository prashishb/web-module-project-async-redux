import styled from 'styled-components';

export const LoadErrorImage = styled.img`
  width: 100%;
  height: auto;
  grid-area: content;
`;

export const AnimeListSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  border-radius: 5px;
  position: relative;
  grid-area: content;
  /* margin-top: calc(5em + 0.1em); */
  min-height: 100vh;
  max-width: 100%;
  padding-bottom: 100px;
`;

// GRID LAYOUT STILL WORKING OUT (FLEXBOX SUCKS WHEN YOU WANT EQUAL SPACES BUT NO WEIRD SPACES BETWEEN UNEVEN ITEMS)
// export const AnimeListSection = styled.section`
//   display: grid;
//   grid-area: content;
//   grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
//   grid-gap: 1em;
//   padding-bottom: 100px;
//   margin: 1em 0 3em;
// `;

export const AnimeContainer = styled.div`
  position: relative;
`;

export const AnimeListWrap = styled.div`
  margin: 0 -7px;
  list-style: none;
  padding: 0;
  margin: 0 0 0 16px;
`;

export const AnimeItemContainer = styled.div`
  margin: 0 7px 20px;
  width: 200px;
  margin-bottom: 0;
  padding-bottom: 0;
  float: left;

  @media (max-width: 466px) {
    width: 150px;
  }
`;

export const AnimePoster = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  margin: 0;
  padding: 0;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.15);
  transition: 0.4s;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.25);
    transform: scale(1.05);
  }
`;

export const AnimeScoreBanner = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 10;
  right: 0;
  overflow: hidden;
  border-radius: 6px 0 0 0;
  background: #1d43a7;
  font-size: 1.2rem;
  padding: 0.2em;
`;

export const AnimeScore = styled.div`
  background: #1d43a7 !important;
  color: #fff !important;
`;

export const AnimeImage = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  object-fit: cover;

  @media (max-width: 466px) {
    height: 200px;
  }
`;

export const AnimeInfo = styled.div`
  font-size: 0.875rem;
  line-height: 1.3em;
  margin: 0;
  font-weight: bold;
  overflow: hidden;
`;

export const AnimeTitle = styled.h3`
  text-align: center;
  overflow: hidden;
`;
