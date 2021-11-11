import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';

import Nav from './Nav/Nav';
import QuizCenter from '../QuizCenter/QuizCenter';
import Favourites from '../Favourites/Favourites';
import LearningCenter from '../LearningCenter/LearningCenter';

import { loadQuizQuestions } from '../apiCalls/apiCalls';
import '../styles/_App.scss';

class App extends Component {
  state = {
    quizQuestions: [],
    error: null
  }

  componentDidMount() {
    loadQuizQuestions()
      .then(data => this.setState({ quizQuestions: data.questionsList }))
      .catch(error => this.setState({ error: error.message }))
  }

  render() {
    return (
      <main>
        <Routes>
          <Route exact path='/' element={
            <>
              <Nav />
              <section className="welcome-text">
                <p className="welcome-text__greeting"></p>
                <p className="welcome-text__purpose"></p>
                <p className="welcome-text__site-guide"></p>
                <p className="welcome-text__call-to-action"></p>
              </section>
            </>
          } />

          <Route exact path='/learning_center' render={ () =>
            <>
              <Nav />
              <LearningCenter />
            </>
          } />

          <Route exact path='/quiz_center' render={ () =>
            <>
              <Nav />
              <QuizCenter />
            </>
          } />

          <Route exact path='/favourites' render={ () =>
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
