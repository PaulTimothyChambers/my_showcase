import React from 'react';

import activeFavouriteIcon from '../quiz-assets/favourite-two.png';
import inactiveFavouriteIcon from '../quiz-assets/favourite-one.png';

const RadioSelect = ({ question, id, order, isActive, toggleFavouriteIcon, option, optionString }) => {

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
            onClick={ () => toggleFavouriteIcon(option, true, `${optionString}IsActive`) }
          />
      }
      {
        isActive &&
          <img
            aria-label="button"
            className={ `quiz-center__favourite-question-${order}` }
            src={ activeFavouriteIcon }
            onClick={ () => toggleFavouriteIcon(option, false, `${optionString}IsActive`) }
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

export default RadioSelect;
