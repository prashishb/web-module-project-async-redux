import styled from 'styled-components';

export const Main = styled.main`
  display: grid;
  position: relative;
  min-height: 100vh;
  grid-gap: 10px;
  grid-template-columns: minmax(150px, 250px) 3fr;
  grid-template-areas:
    'header  header'
    'sidebar content'
    'footer  footer';

  @media (max-width: 769px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'header'
      'content'
      'sidebar'
      'footer';
  }
`;
