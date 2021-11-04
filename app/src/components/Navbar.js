import React from 'react';
import { connect } from 'react-redux';
import { getAnime } from '../actions';

function Navbar({ dispatch }) {
  const handleClick = () => {
    dispatch(getAnime());
  };
  return (
    <>
      <nav>
        <div className='navbar-container'>
          <div className='navbar-logo'>
            random<span>Anime</span>
          </div>
          <div className='navbar-links'>
            <button onClick={handleClick}>Refresh</button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default connect(null)(Navbar);
