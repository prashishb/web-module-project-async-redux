import React from 'react';
import { Main } from './HomeElements';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/Main';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const Home = () => {
  return (
    <Main>
      <ScrollToTop />
      <Navbar />
      <Sidebar />
      <MainContent />
      <Footer />
    </Main>
  );
};

export default Home;
