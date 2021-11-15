import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';

import Nav from './Nav/Nav';
import Home from '../Home/Home';
import QuizCenter from '../QuizCenter/QuizCenter';
import FavouritesContainer from '../FavouritesContainer/FavouritesContainer';
import LearningCenter from '../LearningCenter/LearningCenter';

import { loadHomeText } from '../apiCalls/apiCalls';

class App extends Component {
  constructor() {
    super()
    this.state = {
      appTextElements: {},
      favouriteQuestions: [],
      error: null
    }
    this.favouriteQuestion = this.favouriteQuestion.bind(this)
  }

  componentDidMount() {
    loadHomeText()
      .then(data => this.setState({ appTextElements: data.appTextElements }))
      .catch(error => this.setState({ error: error.message }))
  }

  favouriteQuestion = (option) => {
    const filteredFavourites = this.state.favouriteQuestions.filter(question => {
      return question.id === option.id
    })
    if (!filteredFavourites.length) {
      this.setState({
        favouriteQuestions: [...this.state.favouriteQuestions, option]
      })
    }
  } 

  deleteFavourite = (id) => {
    const filteredFavourites = this.state.favouriteQuestions.filter(question => {
      return question.id !== id
    })
    this.setState({ favouriteQuestions: filteredFavourites })
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
              <QuizCenter favouriteQuestion={ this.favouriteQuestion } deleteFavourite={ this.deleteFavourite } />
            </>
          } />

          <Route exact path='/favourites' element={
            <>
              <Nav />
              <FavouritesContainer favouriteQuestions={ this.state.favouriteQuestions } deleteFavourite={ this.deleteFavourite } />
            </>
          } />
        </Routes>
      </main>
    )
  }
};

export default App;
