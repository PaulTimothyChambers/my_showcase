import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';

import Nav from './Nav/Nav';
import Home from '../Home/Home';
import QuizCenter from '../QuizCenter/QuizCenter';
import Favourites from '../Favourites/Favourites';
import LearningCenter from '../LearningCenter/LearningCenter';

import { loadHomeText } from '../apiCalls/apiCalls';

class App extends Component {
  state = {
    appTextElements: {},
    error: null
  }

  componentDidMount() {
    loadHomeText()
      .then(data => this.setState({ appTextElements: data.appTextElements }))
      .catch(error => this.setState({ error: error.message }))
  }

  render() {
    const appTextElements = this.state.appTextElements;
    return (
      <main>
        <Routes>
          <Route exact path='/' element={
            <>
              {
                appTextElements &&
                  <>
                    <Nav />
                    <Home appTextElements={ this.state.appTextElements }/>
                  </>
              }
            </>
          } />

          <Route exact path='/learning_center' element={
            <>
              <Nav />
              <LearningCenter />
            </>
          } />

          <Route exact path='/quiz_center' element={
            <>
              <Nav />
              <QuizCenter />
            </>
          } />

          <Route exact path='/favourites' element={
            <>
              <Nav />
              <Favourites />
            </>
          } />
        </Routes>
      </main>
    )
  }
};

export default App;
