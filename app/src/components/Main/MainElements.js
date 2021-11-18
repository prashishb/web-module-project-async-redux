import styled from 'styled-components';

export const LoadErrorText = styled.h2`
  text-align: center;
  grid-area: content;
`;

export const App = styled.div`
  position: relative;
  grid-area: content;
  min-height: 100vh;
  margin: 0 auto;
  max-width: 100%;
  width: 100%;
  overflow: hidden;
  padding-bottom: 100px;
  /* margin-top: calc(5em + 0.1em); */

  /* @media (min-width: 769px) {
    width: 70%;
  } */
`;

export const AppContainer = styled.main`
  display: flex;
  flex-direction: column;
  padding: 1%;
  background: #e1e7f5;
  height: 100%;

  @media (min-width: 769px) {
    flex-direction: row;
    margin: 0 2%;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0px 0px 10px #ccc;
  }
`;

export const AnimeTitle = styled.h2`
  margin-top: 0;
  color: #1d43a7;
  /* text-align: left; */
`;

export const AnimeImage = styled.img`
  padding: 0.2%;
  border: 1px solid #bebebe;
  /* margin-bottom: 2%; */
  max-width: 100%;
  height: auto;
`;

export const LeftSide = styled.div`
  @media (min-width: 769px) {
    width: 45%;
    margin-right: 2%;
  }
`;

export const RightSide = styled.div`
  @media (min-width: 769px) {
    width: 45%;
  }
`;

export const LeftSubheadings = styled.p`
  /* margin-top: 0; */
  padding-bottom: 1%;
  font-weight: bold;
  border-bottom: 1px solid #bebebe;
  width: 85%;
`;

export const RightSubheadings = styled.p`
  /* margin-top: 0; */
  padding-bottom: 1%;
  font-weight: bold;
  border-bottom: 1px solid #bebebe;
`;

export const AnimeDetails = styled.p`
  font-weight: bold;
  color: #7f7f7f;
  /* text-align: left; */
`;

export const AnimeSynopsis = styled.p`
  font-size: 1.1rem;
  line-height: 1.4;
  /* margin-bottom: 4%; */
`;

export const Trailer = styled.iframe`
  width: 100%;
  height: 400px;

  @media (min-width: 769px) {
    /* width: 80%; */
  }
`;

export const TrailerNote = styled.p`
  font-size: 0.75rem;
  font-style: italic;
  margin: 0;
  /* padding: 0; */
`;
