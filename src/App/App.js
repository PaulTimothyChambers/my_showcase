import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';

import Nav from './Nav/Nav';
import QuizCenter from '../QuizCenter/QuizCenter';
import Favourites from '../Favourites/Favourites';
import LearningCenter from '../LearningCenter/LearningCenter';

import { loadHomeText } from '../apiCalls/apiCalls';

import title from './assets/title.png'

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
                    <section className="welcome-text">
                      <h1 className="welcome-text__title-one">How to</h1>
                      <img className="welcome-text__logo" src={ title }/>
                      <h1 className="welcome-text__title-two">people</h1>
                      <h2 className="welcome-text__greeting">{ appTextElements.greeting }</h2>
                      <p className="welcome-text__purpose">{ appTextElements.purpose }</p>
                      <p className="welcome-text__site-guide">{ appTextElements.siteGuide }</p>
                      <h3 className="welcome-text__site-guide-learning-center">{ appTextElements.siteGuideLearningCenter }</h3>
                      <p className="welcome-text__learning-center">{ appTextElements.learningCenter }</p>
                      <h3 className="welcome-text__site-guide-quiz-center">{ appTextElements.siteGuideQuizCenter }</h3>
                      <p className="welcome-text__quiz-center">{ appTextElements.quizCenter }</p>
                      <h3 className="welcome-text__site-guide-favourites">{ appTextElements.siteGuideFavourites }</h3>
                      <p className="welcome-text__favourites">{ appTextElements.favourites }</p>
                      <h3 className="welcome-text__call-to-action">{ appTextElements.callToAction }</h3>
                    </section>
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
              <QuizCenter questions={ this.state.quizQuestions }/>
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
