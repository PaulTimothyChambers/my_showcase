import React, { Component } from 'react';
import QuizInput from './QuizInput/QuizInput';

class QuizForm extends Component {
  state = {
    optionOne: null,
    optionTwo: null,
    answer: '',
    answerB: '',
    oneIsActive: false,
    twoIsActive: false
  }

  newQuiz = () => {
    this.clearAnswer();

    const questionOrder = [false, true];
    const topQuestion = questionOrder[Math.floor(Math.random() * questionOrder.length)];

    if (topQuestion) {
      this.setQuestions("optionOne", "optionTwo");

    } else {
      this.setQuestions("optionTwo", "optionOne");
    }
  }

  setQuestions = (optionA, optionB) => {
    this.setState({
      [optionA]: this.props.closedQuestions[Math.floor(Math.random() * this.props.closedQuestions.length)],
      [optionB]: this.props.openQuestions[Math.floor(Math.random() * this.props.openQuestions.length)]
    });
  }

  clearAnswer = () => {
    this.setState({ answer: '', answerB: '' });
  }

  checkAnswers = (event, one, two) => {
    event.preventDefault();
    this.setState({
      oneIsActive: false,
      twoIsActive: false
    });

    if (event.target[1].checked && one.isOpen) {
      this.setState({ answer: 'Correct!' });

    } else if (event.target[2].checked && two.isOpen){
      this.setState({ answer: 'Correct!' });

    } else if (event.target[1].checked && !one.isOpen){
      this.setState({ answer: `"${one.question}":`, answerB: `${one.explanantion}` });

    } else if (event.target[2].checked && !two.isOpen){
      this.setState({ answer: `"${two.question}":`, answerB: `${two.explanantion}` });
    }
  }

  toggleFavouriteIcon = (option, bool, activeIcon) => {
    this.setState({ [activeIcon]: bool });

    if (!this.state[activeIcon]) {
      this.props.favouriteQuestion(option);

    } else {
      this.props.deleteFavourite(option.id);
    }
  }

  render() {
    const optionOne = this.state.optionOne
    const optionTwo = this.state.optionTwo
    const questions = this.props.quizQuestions
    const answer = this.state.answer
    const answerB = this.state.answerB
    const oneIsActive = this.state.oneIsActive
    const twoIsActive = this.state.twoIsActive
    return (
      <>
        {
          !optionOne &&
            <form>
              <button
                className="quiz-center__begin-quiz"
                onClick={ () => this.newQuiz(questions) }
              >
              Get New Questions</button>
            </form>
        }
        {
          answer &&
            <form>
              <section className="quiz-center__results">
                <button
                  className="quiz-center__begin-quiz-answer"
                  onClick={ () => this.newQuiz(questions) }
                >
                Get New Questions</button>
                <h1 className="results__text">{ answer }</h1>
                {
                  answerB &&
                  <h1 className="results__text-b">{ answerB }</h1>
                }
              </section>
            </form>
        }
        {
          optionOne &&
            <>
              {
                !answer &&
                  <form onSubmit={ event => this.checkAnswers(event, optionOne, optionTwo) }>
                    <button
                      className="quiz-center__begin-quiz-quiz"
                      onClick={ () => this.newQuiz(questions) }
                    >
                    Get New Questions</button>
                    <QuizInput
                      key={ Date.now() }
                      question={ optionOne }
                      id={ optionOne.id }
                      order="one"
                      isActive={ oneIsActive }
                      toggleFavouriteIcon={ this.toggleFavouriteIcon }
                      option={ optionOne }
                    />
                    <QuizInput
                      key={ Date.now() + 1 }
                      question={ optionTwo }
                      id={ optionTwo.id }
                      order="two"
                      isActive={ twoIsActive }
                      toggleFavouriteIcon={ this.toggleFavouriteIcon }
                      option={ optionTwo }
                    />
                    <input
                      type="submit"
                      className="quiz-center__submit-button"
                      value="Submit Answer"
                    />
                  </form>
              }
            </>
        }
      </>
    )
  }
}

export default QuizForm;
