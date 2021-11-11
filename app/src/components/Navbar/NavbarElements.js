import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.div`
  display: flex;
  grid-area: header;
  justify-content: center;
  align-items: center;
  background: #fff;
  /* position: fixed; */
  position: sticky;
  width: 100%;
  height: 5em;
  top: 0;
  z-index: 50;
  margin-bottom: 0.5em;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 70rem;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
`;

export const MiddleNavbar = styled.div`
  max-width: 20rem;
`;

export const MiddleNavContainer = styled.div`
  position: relative;
  margin-top: 0.25rem;
  padding: 0.75rem;
  border-radius: 0.375rem;
`;

export const SearchContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  padding-left: 0.75rem;
  display: flex;
  align-items: center;
  pointer-events: none;
`;

export const SearchInput = styled.input`
  background-color: rgba(249, 250, 251, 1);
  display: block;
  width: 100%;
  height: 3em;
  padding-left: 2.5rem;
  border: 1px solid #e1e4e8;
  border-radius: 0.375rem;
  outline: none;

  &:focus {
    border: 1px solid black;
  }

  @media (min-width: 640px) {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
`;

export const NavItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  /* text-align: center; */
  margin-right: -22px;
  padding: 0 1rem;
`;

export const NavbarTextLogoLink = styled(Link)`
  position: relative;
  display: flex;
  justify-self: flex-start;
  font-size: 1rem;
  line-height: 4em;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  display: none;
  color: #000;

  span {
    color: #1d43a7;
  }

  @media (min-width: 769px) {
    font-size: 1.5rem;
  }

  @media (min-width: 1025px) {
    display: inline-block;
  }
`;

export const NavbarLogoLink = styled(Link)`
  text-decoration: none;
`;

export const NavbarLogo = styled.div`
  position: relative;
  width: 4em;
  flex-shrink: 0;
  cursor: pointer;

  @media (min-width: 1025px) {
    display: none;
  }
`;

export const NavbarLogoImage = styled.img`
  width: 3.5em;
  padding: 4%;
  filter: invert(21%) sepia(22%) saturate(7458%) hue-rotate(215deg)
    brightness(92%) contrast(93%);
`;

export const Button = styled.button`
  position: relative;
  color: white;
  background-color: #1d43a7;
  border: 1px solid #1d43a7;
  border-radius: 5px;
  padding: 10px 20px;
  line-height: 1.2;
  font-size: 1.2rem;
  cursor: pointer;
  transition: 0.1s all ease-in-out;

  &:hover {
    filter: brightness(1.4);
  }
`;
