import React, { Component } from 'react';

const RadioSelect = ({ question, isOpen, id }) => {

    return (
      <>
        <input
          type="radio"
          className="quiz-board_option"
          name={ `${id}` }
          value="option"
          // onChange={ event => handleChange(event, option, id) }
        />
        <label
          className="quiz-board__label"
        >
          { `${question.question}` }
        </label>
      </>
    )

}

export default RadioSelect;
