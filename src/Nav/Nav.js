import React from 'react';
import { NavLink } from 'react-router-dom';

import homeIcon from './nav-assets/home-icon.png';
import learningIcon from './nav-assets/learning-icon.png';
import quizIcon from './nav-assets/quiz-icon.png';
import favouritesIcon from './nav-assets/favourites-icon.png';
import navBack from './nav-assets/nav-back.33fb824e.png';
import textImg12 from '../assets/text-bg-15-1.png'

const Nav = () => {

  return (
    <section className="nav-tabs">
      <img className="top-card__bg-12" src={ textImg12 } alt="the logo for the game connect four is shown, but it has been changed to say connect two. this is intended to be a double entendre, with the first meaning being that the author wants to help connect two people with this web page, the second meaning being that the user is looking to connect to people (as in connect to people)"/>
      <NavLink to='/' className="navers">
        <div aria-label="button" className="nav-tabs__home">
          <p className="home__text">Home</p>
          <img className="home__icon" src={ homeIcon } alt="an icon with a home on it repsenting the home page" />
        </div>
      </NavLink>
      <NavLink to='/learning_center' className="navers">
        <div aria-label="button" className="nav-tabs__learning-center">
          <p className="learning-center__text">Learning Center</p>
          <img className="learning-center__icon" src={ learningIcon } alt="an icon with a light bulb on it repsenting the learning center" />
        </div>
      </NavLink>
      <NavLink to='/quiz_center' className="navers">
        <div aria-label="button" className="nav-tabs__quiz-center">
          <p className="quiz-center__text">Quiz Center</p>
          <img className="quiz-center__icon" src={ quizIcon } alt="an icon with a clipboard on it respresenting the quiz center" />
        </div>
      </NavLink>
      <NavLink to='/favourites' className="navers">
        <div aria-label="button" className="nav-tabs__favourites">
          <p className="favourites__text">Favourites</p>
          <img className="favourites__icon" src={ favouritesIcon } alt="an icon of a star respresenting the favourites page" />
        </div>
      </NavLink>
    </section>
  )
}

export default Nav;

// <img className="nav__back" src={ navBack } alt="a splash of color across the navigation tab for the home page" />
// <img className="nav__back" src={ navBack } alt="a splash of color across the navigation tab for the learning center page" />
// <img className="nav__back" src={ navBack } alt="a splash of color across the navigation tab for the quiz page" />
// <img className="nav__back" src={ navBack }  alt="a splash of color across the navigation tab for the favourites page" />
