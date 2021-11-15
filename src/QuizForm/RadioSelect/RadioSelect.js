import React, { Component } from 'react';

import activeFavouriteIcon from '../quiz-assets/favourite-two.png';
import inactiveFavouriteIcon from '../quiz-assets/favourite-one.png';

const RadioSelect = ({ question, id, isActive, toggleFavouriteIcon, option, optionString }) => {
  // console.log(option)
  return (
    <div className="quiz-center__option">
      <input
        type="radio"
        className="quiz-board_option"
        name="option"
        value="option"
      />
      {
        !isActive &&
          <img aria-label="button" className={`quiz-center__favourite-question-${optionString}`} src={ inactiveFavouriteIcon } onClick={ () => toggleFavouriteIcon(option, true, `${optionString}IsActive`) } />
      }
      {
        isActive &&
          <img aria-label="button" className={`quiz-center__favourite-question-${optionString}`} src={ activeFavouriteIcon } onClick={ () => toggleFavouriteIcon(option, false, `${optionString}IsActive`) } />
      }
      <label
        className="quiz-board__label"
      >
        { `${question.question}` }
      </label>
    </div>
  )

}

export default RadioSelect;
