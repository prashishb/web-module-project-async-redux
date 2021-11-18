import React from 'react';
import { Main } from './HomeElements';
import Navbar from '../components/Navbar';
import Search from '../components/Search';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const SearchPage = () => {
  return (
    <Main>
      <Navbar />
      <Sidebar />
      <Search />
      <Footer />
    </Main>
  );
};

export default SearchPage;
