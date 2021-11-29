import React, { Component } from 'react';

import { loadLearningCenterText } from '../apiCalls/apiCalls';

import learningIcon from '../Nav/nav-assets/learning-icon.png';

class LearningCenter extends Component {
  state = {
    learningCenterTextElements: [],
    error: null
  }

  componentDidMount() {
    loadLearningCenterText()
      .then(data => this.setState({ learningCenterTextElements: data.learningCenterTextElements }))
      .catch(error => this.setState({ error: error.message }))
  }

  allElements = () => {
    const mappedTexts = this.state.learningCenterTextElements.map((ele, i) => {
      if (i === 0 || i === 5 || i ===  11 || i === 12) {
        return (
          this.renderTextElement('def', ele, i)
        )

      } else if (i === 16) {
        return (
          this.renderTextElement('tips-title', ele, i)
        )

      } else if (i === 17 || i === 18 || i === 19) {
        return (
          this.renderTextElement('tips', ele, i)
        )

      } else if (i === 20) {
        return (
          this.renderTextElement('final-thoughts-title', ele, i)
        )

      } else if (i === 21|| i === 22 || i === 23 || i === 24 || i === 25) {
        return (
          this.renderTextElement('final-thoughts', ele, i)
        )

      } else {
        return (
          this.renderTextElement('def-indent', ele, i)
        )
      }
    })
    return mappedTexts
  }

  renderTextElement = (className, ele, i)  => {
    return (
      <p
        key={ Date.now() + i }
        className={ `learning-center__${className}` }
      >{ ele }</p>
    )
  }

  render() {
    return (
      <section className="learning-center">
        {
          this.state.learningCenterTextElements &&
            <article>
              <img
                className="learning-center__icon-learning-center"
                src={ learningIcon }
                alt="an icon with a light bulb on it repsenting the learning center"
              />
              <h1 className="learning-center__def-title">HOW TO ASK OPEN-ENDED QUESTIONS</h1>
              { this.allElements() }
            </article>
        }
      </section>
    )
  }
}

export default LearningCenter;

// let expr = i + 1
// switch(expr) {
  //   case 1 || 6 || 12 || 13:
  //     console.log('first')
  //     return (
    //       this.renderTextElement('def', ele, i)
    //     )
    //     break
    //   case 17:
    //     console.log('second')
    //     return (
      //       this.renderTextElement('tips-title', ele, i)
      //     )
      //     break
      //   case 18 || 19 || 20:
      //     console.log('third')
      //     return (
        //       this.renderTextElement('tips', ele, i)
        //     )
        //     break
        //   case 21:
        //     console.log('fourth')
        //     return (
          //       this.renderTextElement('final-thoughts-title', ele, i)
          //     )
          //     break
          //   case 22 || 23 || 24 || 25 || 26:
          //     console.log('fifth')
          //     return (
            //       this.renderTextElement('final-thoughts', ele, i)
            //     )
            //   default:
            //     console.log('six')
            //     return (
              //       this.renderTextElement('def-indent', ele, i)
              //     )
              //     break
              // }
