import React from 'react';
import * as FaIcons from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

function Footer() {
  return (
    <IconContext.Provider value={{ size: '2.5em' }}>
      <footer>
        <div className='footer'>
          <div className='footer-row'>
            <div className='social-icons'>
              <a href='#' target='_blank' rel='noreferrer'>
                <FaIcons.FaFacebookF />
              </a>
              <a href='#' target='_blank' rel='noreferrer'>
                <FaIcons.FaInstagram />
              </a>
              <a
                href='https://github.com/prashishb'
                target='_blank'
                rel='noreferrer'>
                <FaIcons.FaGithub />
              </a>
              <a href='#' target='_blank' rel='noreferrer'>
                <FaIcons.FaTwitter />
              </a>
            </div>
          </div>
          <div class='row'>
            <p className='copyright'>
              randomAnime &copy; {new Date().getFullYear()} - All rights
              reserved || Designed By: Prashish Bhandari
            </p>
          </div>
        </div>
      </footer>
    </IconContext.Provider>
  );
}

export default Footer;
