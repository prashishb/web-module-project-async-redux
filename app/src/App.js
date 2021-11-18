import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import styled from 'styled-components';
import Home from './pages';
import SearchPage from './pages/search';
import { getAnime } from './actions/animeActions';
import { LoadErrorText } from './components/Main/MainElements';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App({ error, isFetching, dispatch }) {
  useEffect(() => {
    dispatch(getAnime());
  }, [dispatch]);

  if (error) {
    return (
      <>
        <Navbar />
        <Sidebar />
        <LoadErrorText>Error: {error}</LoadErrorText>
        <Footer />
      </>
    );
  }

  if (isFetching) {
    return (
      <>
        <Navbar />
        <Sidebar />
        <LoadErrorText>Loading...</LoadErrorText>
        <Footer />
      </>
    );
  }

  return (
    <Container>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/' component={SearchPage} />
      </Switch>
    </Container>
  );
}

const Container = styled.div`
  margin: 0;
  padding: 0;
`;

const mapStateToProps = (state) => ({
  isFetching: state.animeReducer.isFetching,
  error: state.animeReducer.error,
});

export default connect(mapStateToProps)(App);
