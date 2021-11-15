import React, { Component } from 'react';
import RadioSelect from './RadioSelect/RadioSelect';

class QuizForm extends Component {
  state = {
    optionOne: null,
    optionTwo: null,
    answer: '',
    oneIsActive: false,
    twoIsActive: false
  }

  newQuiz = () => {
    this.clearAnswer()

    const questionOrder = [false, true];
    const topQuestion = questionOrder[Math.floor(Math.random() * questionOrder.length)];

    if (topQuestion) {
      this.setQuestions("optionOne", "optionTwo")

    } else {
      this.setQuestions("optionTwo", "optionOne")
    }
  }

  setQuestions = (optionA, optionB) => {
    this.setState({
      [optionA]: this.props.closedQuestions[Math.floor(Math.random() * this.props.closedQuestions.length)],
      [optionB]: this.props.openQuestions[Math.floor(Math.random() * this.props.openQuestions.length)]
    })
  }

  clearAnswer = () => {
    this.setState({ answer: '' })
  }

  checkAnswers = (event, one, two) => {
    event.preventDefault()

    if (event.target[0].checked && one.isOpen) {
      this.setState({ answer: 'You got it!' })

    } else if (event.target[2].checked && two.isOpen){
      this.setState({ answer: 'You got it!' })

    } else if (event.target[0].checked && !one.isOpen){
      this.setState({ answer: `That was a closed-ended question, as it can be answered in a short phrase/word ${one.explanantion}` })

    } else if (event.target[2].checked && !two.isOpen){
      this.setState({ answer: `That was a closed-ended question, as it can be answered in a short phrase/word ${two.explanantion}` })
    }
  }

  toggleFavouriteIcon = (option, bool, isActive) => {
    this.setState({ [isActive]: bool })
    // console.log(option)
    if (!this.state[isActive]) {
      this.props.favouriteQuestion(option)

    } else {
      this.props.deleteFavourite(option.id)
    }
  }

  render() {
    return (
      <>
        {
          !this.state.optionOne &&
            <button className="quiz-center__begin-quiz" onClick={ () => this.newQuiz(this.props.quizQuestions) }>Get New Questions</button>
        }
        {
          this.state.answer &&
            <section className="quiz-center__results">
              <h1 className="results__text">{ this.state.answer }</h1>
              <button className="quiz-center__begin-quiz" onClick={ () => this.newQuiz(this.props.quizQuestions) }>Get New Questions</button>
            </section>
        }
        {
          this.state.optionOne &&
            <form onSubmit={ event => this.checkAnswers(event, this.state.optionOne, this.state.optionTwo) }>
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
              <input type="submit" className="quiz-center__submit-button" value="Submit Answer"/>
              <button className="quiz-center__begin-quiz" onClick={ () => this.newQuiz(this.props.quizQuestions) }>Get New Questions</button>
            </form>
        }
      </>
    )
  }
  // {
    //   !this.state.oneIsActive &&
    //     <img aria-label="button" className="quiz-center__favourite-question-one" src={ inactiveFavouriteIcon } onClick={ () => this.toggleFavouriteIcon(this.state.optionOne, true, "oneIsActive") } />
    // }
    // {
      //   this.state.oneIsActive &&
      //     <img aria-label="button" className="quiz-center__favourite-question-one" src={ activeFavouriteIcon } onClick={ () => this.toggleFavouriteIcon(this.state.optionOne, false, "oneIsActive") } />
      // }
      // {
        //   !this.state.twoIsActive &&
        //     <img aria-label="button" className="quiz-center__favourite-question-two" src={ inactiveFavouriteIcon } onClick={ () => this.toggleFavouriteIcon(this.state.optionTwo, true, "twoIsActive") } />
        // }
        // {
          //   this.state.twoIsActive &&
          //     <img aria-label="button" className="quiz-center__favourite-question-two" src={ activeFavouriteIcon } onClick={ () => this.toggleFavouriteIcon(this.state.optionTwo, false, "twoIsActive") } />
          // }



  // loadQuestions(questions) {
    //   this.setState({
      //     optionOne: questions[0],
      //     optionTwo: questions[1],
      //     optionThree: questions[2],
      //   })
      // }


  // handleChange(event, option, id) {
    //   let expr = parseInt(option);
    //   if (event.target.checked) {
      //     switch (expr) {
        //       case 1:
        //         this.state.optionOne.checked = true
        //         break;
        //       case 2:
        //         this.state.optionTwo.checked = true
        //         break;
        //       case 3:
        //         this.state.optionThree.checked = true
        //         break;
        //       default:
        //         break;
        //     }
        //   } else if (!event.target.checked){
          //     switch (expr) {
            //       case 1:
            //         this.state.optionOne.checked = false
            //         break;
            //       case 2:
            //         this.state.optionTwo.checked = false
            //         break;
            //       case 3:
            //         this.state.optionThree.checked = false
            //         break;
            //       default:
            //         break;
            //     }
            //   }
            //   console.log(this.state.optionOne)
            //   console.log(this.state.optionTwo)
            //   console.log(this.state.optionThree)
            // }
            //
            // clearOptions() {
              //   this.state.optionOne = {}
              //   this.state.optionTwo = {}
              //   this.state.optionThree = {}
              // }
              //
              // checkAnswers(event) {
                //   event.preventDefault()
                //   const answers = [];
                //   const userAnswers = [event.target[0], event.target[1], event.target[2]];
                //   userAnswers.forEach(answer => {
                  //     this.state.options.forEach(option => {
                    //       if (answer.checked && !option.isOpen || !answer.checked && option.isOpen) {
                      //         answers.push(false)
                      //       } else {
                        //         answers.push(true)
                        //       }
                        //     })
                        //   })
                        //   const answers.every(answer => {
                          //     return answer === true
                          //   })
                          //
                          // }
    // <div>
      // <form>
      //   {
      //     this.state.questionOne &&
      //       <section className="quiz-board">
      //         <div className="quiz-center__quiz-board">
      //           <input
      //             type="checkbox"
      //             className="quiz-board_option-one"
      //             name="optionOne"
      //             value={ this.state.questionOne.isOpen }
      //           />
      //           <label
      //             className="quiz-board__label"
      //             for="optionOne"
      //           >
      //             { this.state.questionOne.question }
      //           </label>
      //         </div>
      //         <div className="quiz-center__quiz-board">
      //           <input
      //             type="checkbox"
      //             className="quiz-board_option-two"
      //             name="optionTwo"
      //             value={ this.state.questionOne.isOpen }
      //           />
      //           <label
      //             className="quiz-board__label"
      //             for="optionTwo"
      //           >
      //             { this.state.questionTwo.question }
      //           </label>
      //         </div>
      //         <div className="quiz-center__quiz-board">
      //           <input
      //             type="checkbox"
      //             className="quiz-board_option-three"
      //             name="optionThree"
      //             value={ this.state.questionOne.isOpen }
      //           />
      //           <label
      //             className="quiz-board__label"
      //             for="optionThree"
      //           >
      //             { this.state.questionThree.question }
      //           </label>
      //         </div>
      //       </section>
      //   }
      //   <input
      //     type="submit"
      //     className="quiz-center__submit-button"
      //     value="Check Answers"
      //     onClick={ this.checkAnswers }
      //   />
      // </form>
      // <button className="quiz-center__begin-quiz" onClick={ () => this.newQuiz(this.props.quizQuestions) }>Get New Questions</button>
    // </div>
  // )
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
