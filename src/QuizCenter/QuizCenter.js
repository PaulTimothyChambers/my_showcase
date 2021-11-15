import React, { Component } from 'react';
import { loadQuestions } from '../apiCalls/apiCalls';
import QuizForm from '../QuizForm/QuizForm'

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
              <h1 className="quiz-center__header-text">The QUIZ CENTER</h1>
              <h3 className="quiz-center__subtitle">(I'm secretly keeping score... 0_o)</h3>
              <p className="quiz-center__standby">Note: Click the "Get New Questions" button (located below) at any time to obtain a new set of quiz questions.</p>
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
