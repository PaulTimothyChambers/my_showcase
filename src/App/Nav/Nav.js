import React from 'react';
import { NavLink } from 'react-router-dom';

import homeIcon from './nav-assets/home-icon.png';
import learningIcon from './nav-assets/learning-icon.png';
import quizIcon from './nav-assets/quiz-icon.png';
import favouritesIcon from './nav-assets/favourites-icon.png';

const Nav = () => {

  return (
    <section className="nav-tabs">
      <NavLink to='/' className="navers">
        <div className="nav-tabs__home">
          <p className="home__text">Home</p>
          <img className="home__icon" src={homeIcon} />
        </div>
      </NavLink>
      <NavLink to='/learning_center' className="navers">
        <div className="nav-tabs__learning-center">
          <p className="learning-center__text">Learning Center</p>
          <img className="learning-center__icon" src={learningIcon} />
        </div>
      </NavLink>
      <NavLink to='/quiz_center' className="navers">
        <div className="nav-tabs__quiz-center">
          <p className="quiz-center__text">Quiz Center</p>
          <img className="quiz-center__icon" src={quizIcon} />
        </div>
      </NavLink>
      <NavLink to='/favourites' className="navers">
        <div className="nav-tabs__favourites">
          <p className="favourites__text">Favourites</p>
          <img className="favourites__icon" src={favouritesIcon} />
        </div>
      </NavLink>
    </section>
  )
}

export default Nav;
