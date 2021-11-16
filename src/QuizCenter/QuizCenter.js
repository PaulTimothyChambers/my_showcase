import React, { Component } from 'react';
import { loadQuestions } from '../apiCalls/apiCalls';
import QuizForm from '../QuizForm/QuizForm'

import quizIcon from '../App/Nav/nav-assets/quiz-icon.png';

class QuizCenter extends Component {
  state = {
    openQuestions: [],
    closedQuestions: [],
    error: null
  }

  componentDidMount() {
    loadQuestions()
      .then(data => this.setState({
        openQuestions: data.questions.openQuestions,
        closedQuestions: data.questions.closedQuestions
      }))
      .catch(error => this.setState({ error: error.message }))
  }

  render() {
    return (
      <>
        {
          this.state.closedQuestions.length &&
            <section className="quiz-center">
              <img className="quiz-center__icon-quiz-center" src={ quizIcon } alt="an icon with a clipboard on it respresenting the quiz center" />
              <h1 className="quiz-center__header-text">The QUIZ CENTER</h1>
              <h3 className="quiz-center__subtitle">(I'm secretly keeping score... 0_o)</h3>
              <p className="quiz-center__standby">Time to get some practice in! You will soon be presented with two questions. One of them is open-ended, the other is closed-ended. Take your time, and choose carefully! Each "quiz" here is just one "problem" long. Click the "Get New Questions" button (located below) at any time to begin a quiz:</p>
              <QuizForm
                openQuestions={ this.state.openQuestions }
                closedQuestions={ this.state.closedQuestions }
                favouriteQuestion={ this.props.favouriteQuestion }
                deleteFavourite={ this.props.deleteFavourite }
                checkAnswers={ this.checkAnswers }
                answer={ this.state.answer }
              />
            </section>
        }
      </>
    )
  }
}

export default QuizCenter;
