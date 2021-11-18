import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getAnime } from '../../actions/animeActions';
import { searchAnime } from '../../actions/searchActions';
import {
  Nav,
  NavbarContainer,
  MiddleNavbar,
  MiddleNavContainer,
  SearchContainer,
  SearchInput,
  NavItems,
  NavbarTextLogoLink,
  NavbarLogoLink,
  NavbarLogo,
  NavbarLogoImage,
  Button,
} from './NavbarElements';
import * as HiIcons from 'react-icons/hi';
import { IconContext } from 'react-icons/lib';
import logo from '../../images/logo.png';

function Navbar({ dispatch }) {
  const [searchValue, setSearchValue] = useState('');

  const history = useHistory();

  const handleClick = () => {
    dispatch(getAnime());
    history.push('/');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchAnime(searchValue));
    setSearchValue('');
    history.push(`/search?q=${searchValue}`);
  };

  return (
    <Nav>
      <IconContext.Provider
        value={{ size: '1.5rem', color: 'rgba(107, 114, 128, 1)' }}>
        <NavbarContainer>
          <NavbarTextLogoLink to='/'>
            random<span>Anime</span>
          </NavbarTextLogoLink>
          <NavbarLogo>
            <NavbarLogoLink to='/'>
              <NavbarLogoImage src={logo} alt='logo' />
            </NavbarLogoLink>
          </NavbarLogo>
          <MiddleNavbar>
            <MiddleNavContainer>
              <SearchContainer>
                <HiIcons.HiSearch />
              </SearchContainer>
              <form onSubmit={handleSearch}>
                <SearchInput
                  type='text'
                  placeholder='Search'
                  required
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
              </form>
            </MiddleNavContainer>
          </MiddleNavbar>
          <NavItems>
            <Button onClick={handleClick}>Random</Button>
          </NavItems>
        </NavbarContainer>
      </IconContext.Provider>
    </Nav>
  );
}

const mapStateToProps = (state) => ({
  searchResults: state.searchReducer.search,
});

export default connect(mapStateToProps)(Navbar);
