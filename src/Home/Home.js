import React from 'react';

import title from './home-assets/title.png';
import author from './home-assets/author.jpg';
import learningIcon from '../App/Nav/nav-assets/learning-icon.png';
import quizIcon from '../App/Nav/nav-assets/quiz-icon.png';
import favouritesIcon from '../App/Nav/nav-assets/favourites-icon.png';

const Home = ({ appTextElements }) => {

  return (
    <section className="welcome-text">
      <h1 className="welcome-text__title-one">I WANT TO</h1>
      <img className="welcome-text__logo" src={ title } alt="the logo for the game connect four is shown, but it has been changed to say connect two. this is intended to be a double entendre, with the first meaning being that the author wants to help connect two people with this web page, the second meaning being that the user is looking to connect to people (as in connect t o people)"/>
      <div className="welcome-text__author-about">
        <img className="welcome-text__author" src={ author } alt="a dog seated in the passenger side of a vehicle, looking at the driver with a smile in his eyes"/>
        <p className="author-about__header">(ABOUT THE AUTHOR)</p>
        <p className="author-about__body">{ appTextElements.aboutAuthor }</p>
      </div>
      <h1 className="welcome-text__title-two">PEOPLE</h1>
      <h2 className="welcome-text__greeting">{ appTextElements.greeting }</h2>
      <p className="welcome-text__purpose">{ appTextElements.purpose }</p>
      <p className="welcome-text__site-guide">{ appTextElements.siteGuide }</p>
      <h3 className="welcome-text__site-guide-nav">LEARNING CENTER</h3>
      <img className="welcome-text__icon" src={ learningIcon } alt="an icon with a light bulb on it repsenting the learning center" />
      <p className="welcome-text__tab">{ appTextElements.learningCenter }</p>
      <h3 className="welcome-text__site-guide-nav">QUIZ CENTER</h3>
      <img className="welcome-text__icon" src={ quizIcon } alt="an icon with a clipboard on it respresenting the quiz center" />
      <p className="welcome-text__tab">{ appTextElements.quizCenter }</p>
      <h3 className="welcome-text__site-guide-nav">FAVOURITES</h3>
      <img className="welcome-text__icon" src={ favouritesIcon } alt="an icon of a star respresenting the favourites page" />
      <p className="welcome-text__tab">{ appTextElements.favourites }</p>
      <h3 className="welcome-text__site-guide-nav">AND FINALLY...</h3>
      <p className="welcome-text__call-to-action">{ appTextElements.callToAction }</p>
    </section>
  )
}

export default Home;
