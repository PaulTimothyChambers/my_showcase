import React, { Component } from 'react';
import { loadQuizQuestions } from '../apiCalls/apiCalls';
import QuizForm from '../QuizForm/QuizForm'

class QuizCenter extends Component {
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
      <>
        {
          this.state.quizQuestions.length &&
            <section className="quiz-center">
              <h1 className="quiz-center__header-text">The QUIZ CENTER</h1>
              <h3 className="quiz-center__subtitle">(I'm secretly keeping score... 0_o)</h3>
              {
                !this.state.questionOne &&
                <p className="quiz-center__standby">Click "Get New Questions" (located below) to begin the quiz!</p>
              }
              <QuizForm quizQuestions={ this.state.quizQuestions } />
            </section>
        }
      </>
    )
  }
}

export default QuizCenter;
