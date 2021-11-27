import React from 'react';

import activeFavouriteIcon from '../quiz-assets/favourite-two.png';
import inactiveFavouriteIcon from '../quiz-assets/favourite-one.png';

const QuizInput = ({ question, id, order, isActive, toggleFavouriteIcon }) => {

  return (
    <div className={ `quiz-center__option-${order}` }>
      <input
        id={ `${id}` }
        type="radio"
        className="quiz-board_option"
        name="option"
        value="option"
      />
      {
        !isActive &&
          <img
            aria-label="button"
            className={ `quiz-center__favourite-question-${order}` }
            src={ inactiveFavouriteIcon }
            onClick={ () => toggleFavouriteIcon(question, true, `${order}IsActive`) }
          />
      }
      {
        isActive &&
          <img
            aria-label="button"
            className={ `quiz-center__favourite-question-${order}` }
            src={ activeFavouriteIcon }
            onClick={ () => toggleFavouriteIcon(question, false, `${order}IsActive`) }
          />
      }
      <label
        className={ `quiz-board__label-${order}` }
        htmlFor={ `${id}` }
      >
        { `${question.question}` }
      </label>
    </div>
  )

}

export default QuizInput;
