import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';

import Nav from './Nav/Nav';
import QuizCenter from '../QuizCenter/QuizCenter';
import Favourites from '../Favourites/Favourites';
import LearningCenter from '../LearningCenter/LearningCenter';

import appTextElements from './AppTextElements'
import { loadQuizQuestions } from '../apiCalls/apiCalls';

import title from './assets/title.png'

class App extends Component {
  state = {

  }

  render() {
    return (
      <main>
        <Routes>
          <Route exact path='/' element={
            <>
              <Nav />
              <section className="welcome-text">
                <p className="welcome-text__title-one">How to</p>
                <img className="welcome-text__logo" src={ title }/>
                <p className="welcome-text__title-two">people</p>
                <p className="welcome-text__greeting">{ appTextElements.greeting }</p>
                <p className="welcome-text__time-insurance-policy">{ appTextElements.timeInsurancePolicy }</p>
                <p className="welcome-text__purpose">{ appTextElements.purpose }</p>
                <p className="welcome-text__site-guide">{ appTextElements.siteGuide }</p>
                <p className="welcome-text__site-guide-learning-center">{ appTextElements.siteGuideLearningCenter }</p>
                <p className="welcome-text__learning-center">{ appTextElements.learningCenter }</p>
                <p className="welcome-text__site-guide-quiz-center">{ appTextElements.siteGuideQuizCenter }</p>
                <p className="welcome-text__quiz-center">{ appTextElements.quizCenter }</p>
                <p className="welcome-text__call-to-action"></p>
              </section>
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
