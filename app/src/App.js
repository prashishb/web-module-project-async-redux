import React from 'react';
import './App.css';
import Anime from './components/Anime';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Anime />
      <Footer />
    </>
  );
}

export default App;
