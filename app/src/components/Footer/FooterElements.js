import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  grid-area: footer;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  z-index: 60;
`;

export const FooterContainer = styled.div`
  /* margin-top: 2%; */
  background: #1d43a7;
  padding: 20px 0;
  text-align: center;
`;

export const FooterRow = styled.div`
  width: 100%;
  margin: 1% 0;
  padding: 0.6% 0;
  color: gray;
  font-size: 0.8rem;
  margin-bottom: 0;
  padding-bottom: 0;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10%;
`;

export const SocialIconLinks = styled.a`
  text-decoration: none;
  color: #7f7f7f;
  transition: 0.5s;
  margin: 0 1%;

  &:hover {
    color: #fff;
    transform: scale(1.1);
  }
`;

export const Copyright = styled.p`
  color: #7f7f7f;
  margin: 0;
  padding: 0;
  line-height: 2;
`;

export const Links = styled.a`
  text-decoration: none;
  color: #7f7f7f;
  font-weight: bold;
`;
