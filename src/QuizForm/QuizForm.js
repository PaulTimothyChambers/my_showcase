import React, { Component } from 'react';
import RadioSelect from './RadioSelect/RadioSelect';

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

  toggleFavouriteIcon = (option, bool, isActive) => {
    this.setState({ [isActive]: bool });

    if (!this.state[isActive]) {
      this.props.favouriteQuestion(option);

    } else {
      this.props.deleteFavourite(option.id);
    }
  }

  render() {
    return (
      <>
        {
          !this.state.optionOne &&
            <
            button
              className="quiz-center__begin-quiz"
              onClick={ () => this.newQuiz(this.props.quizQuestions) }
            >Get New Questions</button>
        }
        {
          this.state.answer &&
            <section className="quiz-center__results">
              <
              button
                className="quiz-center__begin-quiz-answer"
                onClick={ () => this.newQuiz(this.props.quizQuestions) }
              >Get New Questions</button>
              <h1 className="results__text">{ this.state.answer }</h1>
              {
                this.state.answerB &&
                <h1 className="results__text-b">{ this.state.answerB }</h1>
              }
            </section>
        }
        {
          this.state.optionOne &&
            <>
              {
                !this.state.answer &&
                  <
                  form
                    onSubmit={ event => this.checkAnswers(event, this.state.optionOne, this.state.optionTwo) }
                  >
                    <
                    button
                      className="quiz-center__begin-quiz-quiz"
                      onClick={ () => this.newQuiz(this.props.quizQuestions) }
                    >Get New Questions</button>
                    <RadioSelect
                      key={ Date.now() }
                      question={ this.state.optionOne }
                      id={ this.state.optionOne.id }
                      isActive={ this.state.oneIsActive }
                      toggleFavouriteIcon={ this.toggleFavouriteIcon }
                      option={ this.state.optionOne }
                      optionString="one"
                    />
                    <RadioSelect
                      key={ Date.now() + 1 }
                      question={ this.state.optionTwo }
                      id={ this.state.optionTwo.id }
                      isActive={ this.state.twoIsActive }
                      toggleFavouriteIcon={ this.toggleFavouriteIcon }
                      option={ this.state.optionTwo }
                      optionString="two"
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
