import React from 'react';
import * as FaIcons from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

import {
  FooterWrapper,
  FooterContainer,
  FooterRow,
  SocialIcons,
  SocialIconLinks,
  Copyright,
  Links,
} from './FooterElements';

const Footer = () => {
  return (
    <IconContext.Provider value={{ size: '2.5em' }}>
      <FooterWrapper>
        <FooterContainer>
          <FooterRow>
            <SocialIcons>
              <SocialIconLinks href='#' target='_blank' rel='noreferrer'>
                <FaIcons.FaFacebookF />
              </SocialIconLinks>
              <SocialIconLinks href='#' target='_blank' rel='noreferrer'>
                <FaIcons.FaInstagram />
              </SocialIconLinks>
              <SocialIconLinks
                href='https://github.com/prashishb'
                target='_blank'
                rel='noreferrer'>
                <FaIcons.FaGithub />
              </SocialIconLinks>
              <SocialIconLinks href='#' target='_blank' rel='noreferrer'>
                <FaIcons.FaTwitter />
              </SocialIconLinks>
            </SocialIcons>
          </FooterRow>
          <FooterRow>
            <Copyright>
              randomAnime &copy; {new Date().getFullYear()} - All rights
              reserved || Designed By: Prashish Bhandari
              <br />
              Powered by:{' '}
              <Links href='https://jikan.moe/' target='_blank' rel='noreferrer'>
                Jikan API
              </Links>
            </Copyright>
          </FooterRow>
        </FooterContainer>
      </FooterWrapper>
    </IconContext.Provider>
  );
};

export default Footer;
