import styled from 'styled-components';

export const SidebarContainer = styled.div`
  display: flex;
  grid-area: sidebar;
  position: fixed;
  top: 6em;
  box-sizing: border-box;
  z-index: 50;
  display: none;
  min-height: 100vh;

  @media (min-width: 769px) {
    display: block;
  }
`;

export const Aside = styled.aside`
  flex: 1 1 250px;
  max-width: 250px;
  padding-right: 16px;
`;

export const Nav = styled.nav`
  padding-left: 16px;
  padding-right: 16px;
`;

export const Heading = styled.h3`
  color: #313131;
  font-size: 1.2rem;
  margin-bottom: 16px;
`;

export const AnimeLinks = styled.a`
  display: block;
  padding: 8px 16px;
  text-align: left;
  color: #888;
  font-size: 1rem;
  margin-bottom: 16px;
  background-color: #eee;
  border-radius: 20px;
  text-decoration: none;
  transition: 0.4s;
  cursor: pointer;

  &:hover {
    background-color: #1d43a7;
    color: #fff;
  }
`;
