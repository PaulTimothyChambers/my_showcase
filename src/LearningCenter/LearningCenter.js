import React, { Component } from 'react';

import { loadLearningCenterText } from '../apiCalls/apiCalls';

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
              <h1 className="learning-center__def-title">SO, WHAT IS AN OPEN-ENDED QUESTION, ANYWAY?</h1>
              <p className="learning-center__def-one">{ learningCenterTextElements.definitionOne }</p>
              <p className="learning-center__def-two">{ learningCenterTextElements.definitionTwo }</p>
              <p className="learning-center__def-three">{ learningCenterTextElements.definitionThree }</p>
              <p className="learning-center__def-four">{ learningCenterTextElements.definitionFour }</p>
              <p className="learning-center__def-five">{ learningCenterTextElements.definitionFive }</p>
              <p className="learning-center__def-six">{ learningCenterTextElements.definitionSix }</p>
              <p className="learning-center__def-seven">{ learningCenterTextElements.definitionSeven }</p>
              <p className="learning-center__def-eight">{ learningCenterTextElements.definitionEight }</p>
              <p className="learning-center__def-nine">{ learningCenterTextElements.definitionNine }</p>
              <p className="learning-center__def-ten">{ learningCenterTextElements.definitionTen }</p>
              <p className="learning-center__def-eleven">{ learningCenterTextElements.definitionEleven }</p>
              <p className="learning-center__def-twelve">{ learningCenterTextElements.definitionTwelve }</p>
              <p className="learning-center__def-thirteen">{ learningCenterTextElements.definitionThirteen }</p>
              <p className="learning-center__def-fourteen">{ learningCenterTextElements.definitionFourteen }</p>
              <p className="learning-center__def-fifteen">{ learningCenterTextElements.definitionFifteen }</p>
              <p className="learning-center__def-sixteen">{ learningCenterTextElements.definitionSixteen }</p>

              <h1 className="learning-center__tips-title">TIPS:</h1>
              <p className="learning-center__tips-one">{ learningCenterTextElements.tipsOne }</p>
              <p className="learning-center__tips-two">{ learningCenterTextElements.tipsTwo }</p>
              <p className="learning-center__tips-three">{ learningCenterTextElements.tipsThree }</p>

              <h1 className="learning-center__final-thoughts-title">FINAL THOUGHTS:</h1>
              <p className="learning-center__final-thoughts-one">{ learningCenterTextElements.finalThoughtsOne }</p>
              <p className="learning-center__final-thoughts-two">{ learningCenterTextElements.finalThoughtsTwo }</p>
              <p className="learning-center__final-thoughts-three">{ learningCenterTextElements.finalThoughtsThree }</p>
              <p className="learning-center__final-thoughts-four">{ learningCenterTextElements.finalThoughtsFour }</p>
              <p className="learning-center__final-thoughts-five">{ learningCenterTextElements.finalThoughtsFive }</p>
            </>
        }
      </section>
    )
  }
}

export default LearningCenter;
