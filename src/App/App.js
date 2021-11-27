import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';

import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import QuizCenter from '../QuizCenter/QuizCenter';
import FavouritesContainer from '../FavouritesContainer/FavouritesContainer';
import LearningCenter from '../LearningCenter/LearningCenter';
import PageNotFound from '../PageNotFound/PageNotFound';

import { loadHomeText } from '../apiCalls/apiCalls';
import bg5 from '../Home/home-assets/background-five.0e95ebd5.png'

class App extends Component {
  state = {
    appTextElements: {},
    favouriteQuestions: [],
    error: null
  }

  componentDidMount() {
    loadHomeText()
      .then(data => this.setState({ appTextElements: data.appTextElements }))
      .catch(error => this.setState({ error: error.message }))
  }

  favouriteAQuestion = (option) => {
    const filteredFavourites = this.state.favouriteQuestions.filter(question => {
      return question.id === option.id
    });
    if (!filteredFavourites.length) {
      this.setState({
        favouriteQuestions: [...this.state.favouriteQuestions, option]
      });
    }
  }

  deleteFavourite = (id) => {
    const filteredFavourites = this.state.favouriteQuestions.filter(question => {
      return question.id !== id
    });
    this.setState({ favouriteQuestions: filteredFavourites });
  }

  render() {
    const error = this.state.error
    const text = this.state.appTextElements
    const makeFav = this.favouriteAQuestion
    const deleteFav = this.deleteFavourite
    const favQuestions = this.state.favouriteQuestions
    return (
      <main>
        {
          error &&
            <>
              <img className="home-bg" src={ bg5 } alt="a Japanese style mountain and sunset, with water below as the background" />
              <div className="error-message">
                { `${error}` }
              </div>
            </>
        }
        {
          !error &&
            <>
              <img className="home-bg" src={ bg5 } alt="a Japanese style mountain and sunset, with water below as the background" />
              <Routes>
                <Route exact path='/' element={
                  <section className="home-main">
                    <Nav />
                    <Home appTextElements={ text }/>
                  </section>
                } />

                <Route exact path='/learning_center' element={
                  <section className="learning-center-main">
                    <Nav />
                    <LearningCenter />
                  </section>
                } />

                <Route exact path='/quiz_center' element={
                  <section className="quiz-center-main">
                    <Nav />
                    <QuizCenter
                      favouriteQuestion={ makeFav }
                      deleteFavourite={ deleteFav }
                    />
                  </section>
                } />

                <Route exact path='/favourites' element={
                  <section className="favourites-main">
                    <Nav />
                    <FavouritesContainer
                      favouriteQuestions={ favQuestions }
                      deleteFavourite={ deleteFav }
                    />
                  </section>
                } />

                <Route path="*" element={
                  <>
                    <PageNotFound />
                  </>
                } />
              </Routes>
            </>
        }
      </main>
    )
  }
};

export default App;
