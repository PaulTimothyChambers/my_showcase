import React, { Component } from 'react';

class QuizForm extends Component {
  state = {
    currentQuestionsList: this.props.quizQuestions,
    nextQuestionsList: [],
    questionOne: '',
    questionTwo: '',
    questionThree: ''
  }

  newQuiz() {
    const questions = this.state.currentQuestionsList;
    console.log(questions)
    console.log(this.state.nextQuestionsList)
    if (this.state.currentQuestionsList.length) {
      this.loadQuestions()

    } else {
      this.reloadQuizQuestions()
      this.loadQuestions(questions)
    }
  }

  loadQuestions(questions) {
    this.setState({
      questionOne: this.getNewQuestion(questions),
      questionTwo: this.getNewQuestion(questions),
      questionThree: this.getNewQuestion(questions)
    })
  }

  reloadQuizQuestions(questions) {
    this.setState({
      currentQuestionsList: this.state.nextQuestionsList })
  }

  getNewQuestion() {
    const questions = this.state.currentQuestionsList;
    const question = questions[Math.floor(Math.random() * questions.length)];

    this.state.nextQuestionsList.push(questions.splice(questions.indexOf(question), 1));
    // need to flatten this array of arrays somehow 
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

export default QuizForm;
