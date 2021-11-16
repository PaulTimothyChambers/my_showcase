import React, { Component } from 'react';

import { loadLearningCenterText } from '../apiCalls/apiCalls';

import learningIcon from '../App/Nav/nav-assets/learning-icon.png';

class LearningCenter extends Component {
  state = {
    learningCenterTextElements: {},
    error: null
  }

  componentDidMount() {
    loadLearningCenterText()
      .then(data => this.setState({ learningCenterTextElements: data.learningCenterTextElements }))
      .catch(error => this.setState({ error: error.message }))
  }

  render() {
    const learningCenterTextElements = this.state.learningCenterTextElements
    return (
      <section className="learning-center">
        {
          learningCenterTextElements &&
            <>
              <article>
                <img className="learning-center__icon-learning-center" src={ learningIcon } alt="an icon with a light bulb on it repsenting the learning center" />
                <h1 className="learning-center__def-title">HOW TO ASK OPEN-ENDED QUESTIONS</h1>
                <p className="learning-center__def-one">{ learningCenterTextElements.definitionOne }</p>
                <p className="learning-center__def-indent">{ learningCenterTextElements.definitionTwo }</p>
                <p className="learning-center__def-indent">{ learningCenterTextElements.definitionThree }</p>
                <p className="learning-center__def-indent">{ learningCenterTextElements.definitionFour }</p>
                <p className="learning-center__def-indent">{ learningCenterTextElements.definitionFive }</p>
                <p className="learning-center__def">{ learningCenterTextElements.definitionSix }</p>
                <p className="learning-center__def-indent">{ learningCenterTextElements.definitionSeven }</p>
                <p className="learning-center__def-indent">{ learningCenterTextElements.definitionEight }</p>
                <p className="learning-center__def-indent">{ learningCenterTextElements.definitionNine }</p>
                <p className="learning-center__def-indent">{ learningCenterTextElements.definitionTen }</p>
                <p className="learning-center__def-indent">{ learningCenterTextElements.definitionEleven }</p>
                <p className="learning-center__def">{ learningCenterTextElements.definitionTwelve }</p>
                <p className="learning-center__def">{ learningCenterTextElements.definitionThirteen }</p>
                <p className="learning-center__def-indent">{ learningCenterTextElements.definitionFourteen }</p>
                <p className="learning-center__def-indent">{ learningCenterTextElements.definitionFifteen }</p>
                <p className="learning-center__def-indent">{ learningCenterTextElements.definitionSixteen }</p>
              </article>

              <article>
                <h1 className="learning-center__tips-title">SOME HELPFUL TIPS:</h1>
                <p className="learning-center__tips">{ learningCenterTextElements.tipsOne }</p>
                <p className="learning-center__tips">{ learningCenterTextElements.tipsTwo }</p>
                <p className="learning-center__tips">{ learningCenterTextElements.tipsThree }</p>
              </article>

              <article>
                <h1 className="learning-center__final-thoughts-title">FINAL THOUGHTS:</h1>
                <p className="learning-center__final-thoughts">{ learningCenterTextElements.finalThoughtsOne }</p>
                <p className="learning-center__final-thoughts">{ learningCenterTextElements.finalThoughtsTwo }</p>
                <p className="learning-center__final-thoughts">{ learningCenterTextElements.finalThoughtsThree }</p>
                <p className="learning-center__final-thoughts">{ learningCenterTextElements.finalThoughtsFour }</p>
                <p className="learning-center__final-thoughts">{ learningCenterTextElements.finalThoughtsFive }</p>
              </article>
            </>
        }
      </section>
    )
  }
}

export default LearningCenter;
