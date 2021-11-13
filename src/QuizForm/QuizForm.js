import React, { Component } from 'react';

class QuizForm extends Component {
  state = {
    questionOne: '',
    questionTwo: '',
    questionThree: ''
  }

  newQuiz() {
    const questions = this.props.quizQuestions;
    this.setState({
      questionOne: this.getNewQuestion(),
      questionTwo: this.getNewQuestion(),
      questionThree: this.getNewQuestion()
    })
  }

  getNewQuestion() {
    const questions = this.props.quizQuestions;
    const question = questions[Math.floor(Math.random() * questions.length)];
    return question
  }

  render() {
    return(
      <>
        {
          this.state.questionOne &&
            <section className="quiz-board">
              <div className="quiz-center__quiz-board">
                <input type="radio" className="quiz-board_option-one"/>
                <label className="quiz-board__label">{ `${this.state.questionOne.question}` }</label>
              </div>
              <div className="quiz-center__quiz-board">
                <input type="radio" className="quiz-board_option-two"/>
                <label className="quiz-board__label">{ `${this.state.questionTwo.question}` }</label>
              </div>
              <div className="quiz-center__quiz-board">
                <input type="radio" className="quiz-board_option-three"/>
                <label className="quiz-board__label">{ `${this.state.questionThree.question}` }</label>
              </div>
            </section>
        }
        <button className="quiz-center__begin-quiz" onClick={ () => this.newQuiz(this.state.currentQuestionsList) }>Get New Questions</button>
      </>
    )
  }
}

// nextQuestionsList: [],

// if (this.state.currentQuestionsList.length) {}
//
// this.loadQuestions(questions)
// loadQuestions(questions) {
// }

// } else {
//   this.reloadQuizQuestions()
//   this.loadQuestions(questions)
// }

// reloadQuizQuestions() {
//   const next = this.state.nextQuestionsList
//   this.setState({ currentQuestionsList: next })
// }

// this.state.nextQuestionsList.push(questions.splice(questions.indexOf(question), 1));
// console.log(this.state.nextQuestionsList)

export default QuizForm;
