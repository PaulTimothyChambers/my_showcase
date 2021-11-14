import React from 'react';

import title from '../App/assets/title.png';
import author from '../App/assets/author.jpg';
import learningIcon from '../App/Nav/nav-assets/learning-icon.png';
import quizIcon from '../App/Nav/nav-assets/quiz-icon.png';
import favouritesIcon from '../App/Nav/nav-assets/favourites-icon.png';

const Home = ({ appTextElements }) => {
  return (
    <section className="welcome-text">
      <h1 className="welcome-text__title-one">I WANT TO</h1>
      <img className="welcome-text__logo" src={ title }/>
      <a className="welcome-text__author-about">
        <img className="welcome-text__author" src={ author }/>
        <p className="author-about__header">(ABOUT THE AUTHOR)</p>
        <p className="author-about__body">{ appTextElements.aboutAuthor }</p>
      </a>
      <h1 className="welcome-text__title-two">PEOPLE</h1>
      <h2 className="welcome-text__greeting">{ appTextElements.greeting }</h2>
      <p className="welcome-text__purpose">{ appTextElements.purpose }</p>
      <p className="welcome-text__site-guide">{ appTextElements.siteGuide }</p>
      <h3 className="welcome-text__site-guide-nav">LEARNING CENTER</h3>
      <img className="welcome-text__icon" src={ learningIcon }/>
      <p className="welcome-text__tab">{ appTextElements.learningCenter }</p>
      <h3 className="welcome-text__site-guide-nav">QUIZ CENTER</h3>
      <img className="welcome-text__icon" src={ quizIcon }/>
      <p className="welcome-text__tab">{ appTextElements.quizCenter }</p>
      <h3 className="welcome-text__site-guide-nav">FAVOURITES</h3>
      <img className="welcome-text__icon" src={ favouritesIcon }/>
      <p className="welcome-text__tab">{ appTextElements.favourites }</p>
      <h3 className="welcome-text__site-guide-nav">AND FINALLY...</h3>
      <p className="welcome-text__call-to-action">{ appTextElements.callToAction }</p>
    </section>
  )
}

export default Home;
