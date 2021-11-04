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
          <div className='navbar-logo'>randomAnime</div>
          <div className='navbar-links'>
            <button onClick={handleClick}>Roll Random</button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default connect(null)(Navbar);
