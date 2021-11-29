import React from 'react';

import title from './home-assets/title.png';
import author from './home-assets/author.jpg';
import learningIcon from '../Nav/nav-assets/learning-icon.png';
import quizIcon from '../Nav/nav-assets/quiz-icon.png';
import favouritesIcon from '../Nav/nav-assets/favourites-icon.png';

import textImg from '../assets/text-bg3.png'
import textImg2 from '../assets/text-bg.png'
// import textImg1 from '../assets/text-bg-5.png'
// import textImg2 from '../assets/text-bg-6.png'
// import textImg3 from '../assets/text-bg-7.png'
// import textImg4 from '../assets/text-bg-8.png'
// import textImg5 from '../assets/text-bg-9.png'
// import textImg6 from '../assets/text-bg-10.png'
import textImg7 from '../assets/text-bg-11.png'
// import textImg8 from '../assets/text-bg-12.png'
// import textImg9 from '../assets/text-bg-13.png'
// import textImg10 from '../assets/text-bg-14.png'
// import textImg11 from '../assets/text-bg-15.png'
import textImg12 from '../assets/text-bg-15-1.png'
// import textImg13 from '../assets/easter-egg.png'
// import textImg14 from '../assets/button-bg.png'

const Home = ({ appTextElements }) => {

  return (
    <section className="welcome-text">
      <h1 className="welcome-text__title-one">I WANT TO</h1>
      <img className="welcome-text__logo" src={ title } alt="the logo for the game connect four is shown, but it has been changed to say connect two. this is intended to be a double entendre, with the first meaning being that the author wants to help connect two people with this web page, the second meaning being that the user is looking to connect to people (as in connect to people)"/>
      <h1 className="welcome-text__title-two">PEOPLE</h1>
      <div className="welcome-text__author-about">
        <img className="welcome-text__author" src={ author } alt="a dog seated in the passenger side of a vehicle, looking at the driver with a smile in his eyes"/>
        <p className="author-about__header">(ABOUT THE AUTHOR)</p>
        <p className="author-about__body">{ appTextElements.aboutAuthor }</p>
      </div>
      <div className="welcome-text__top-card">
        <img className="top-card__bg" src={ textImg } alt="the logo for the game connect four is shown, but it has been changed to say connect two. this is intended to be a double entendre, with the first meaning being that the author wants to help connect two people with this web page, the second meaning being that the user is looking to connect to people (as in connect to people)"/>
        <img className="top-card__bg-7" src={ textImg7 } alt="the logo for the game connect four is shown, but it has been changed to say connect two. this is intended to be a double entendre, with the first meaning being that the author wants to help connect two people with this web page, the second meaning being that the user is looking to connect to people (as in connect to people)"/>
        <h2 className="top-card__greeting">{ appTextElements.greeting }</h2>
        <p className="top-card__purpose">{ appTextElements.purpose }</p>
        <p className="top-card__site-guide">{ appTextElements.siteGuide }</p>
        <h3 className="top-card__site-guide-nav">LEARNING CENTER</h3>
        <img className="top-card__icon" src={ learningIcon } alt="an icon with a light bulb on it repsenting the learning center" />
        <p className="top-card__tab">{ appTextElements.learningCenter }</p>
      </div>
      <div className="welcome-text__middle-card">
        <h3 className="middle-card__site-guide-nav">QUIZ CENTER</h3>
        <img className="middle-card__icon" src={ quizIcon } alt="an icon with a clipboard on it respresenting the quiz center" />
        <p className="middle-card__tab">{ appTextElements.quizCenter }</p>
      </div>
      <div className="welcome-text__bottom-card">
        <h3 className="bottom-card__site-guide-nav">FAVOURITES</h3>
        <img className="bottom-card__icon" src={ favouritesIcon } alt="an icon of a star respresenting the favourites page" />
        <p className="bottom-card__tab">{ appTextElements.favourites }</p>
        <h3 className="bottom-card__site-guide-nav">AND FINALLY...</h3>
        <p className="bottom-card__call-to-action">{ appTextElements.callToAction }</p>
      </div>
    </section>
  )
}

export default Home;

// <img className="top-card__bg-12" src={ textImg12 } alt="the logo for the game connect four is shown, but it has been changed to say connect two. this is intended to be a double entendre, with the first meaning being that the author wants to help connect two people with this web page, the second meaning being that the user is looking to connect to people (as in connect to people)"/>
// <img className="top-card__bg-12" src={ textImg11 } alt="the logo for the game connect four is shown, but it has been changed to say connect two. this is intended to be a double entendre, with the first meaning being that the author wants to help connect two people with this web page, the second meaning being that the user is looking to connect to people (as in connect to people)"/>
// <img className="top-card__bg-11" src={ textImg12 } alt="the logo for the game connect four is shown, but it has been changed to say connect two. this is intended to be a double entendre, with the first meaning being that the author wants to help connect two people with this web page, the second meaning being that the user is looking to connect to people (as in connect to people)"/>
// <img className="top-card__bg" src={ textImg2 } alt="the logo for the game connect four is shown, but it has been changed to say connect two. this is intended to be a double entendre, with the first meaning being that the author wants to help connect two people with this web page, the second meaning being that the user is looking to connect to people (as in connect to people)"/>
// <img className="top-card__bg-two" src={ textImg2 } alt="the logo for the game connect four is shown, but it has been changed to say connect two. this is intended to be a double entendre, with the first meaning being that the author wants to help connect two people with this web page, the second meaning being that the user is looking to connect to people (as in connect to people)"/>
// <img className="top-card__bg" src={ textImg1 } alt="the logo for the game connect four is shown, but it has been changed to say connect two. this is intended to be a double entendre, with the first meaning being that the author wants to help connect two people with this web page, the second meaning being that the user is looking to connect to people (as in connect to people)"/>
// <img className="top-card__bg" src={ textImg3 } alt="the logo for the game connect four is shown, but it has been changed to say connect two. this is intended to be a double entendre, with the first meaning being that the author wants to help connect two people with this web page, the second meaning being that the user is looking to connect to people (as in connect to people)"/>
// <img className="top-card__bg" src={ textImg4 } alt="the logo for the game connect four is shown, but it has been changed to say connect two. this is intended to be a double entendre, with the first meaning being that the author wants to help connect two people with this web page, the second meaning being that the user is looking to connect to people (as in connect to people)"/>
// <img className="top-card__bg" src={ textImg5 } alt="the logo for the game connect four is shown, but it has been changed to say connect two. this is intended to be a double entendre, with the first meaning being that the author wants to help connect two people with this web page, the second meaning being that the user is looking to connect to people (as in connect to people)"/>
// <img className="top-card__bg" src={ textImg6 } alt="the logo for the game connect four is shown, but it has been changed to say connect two. this is intended to be a double entendre, with the first meaning being that the author wants to help connect two people with this web page, the second meaning being that the user is looking to connect to people (as in connect to people)"/>
// <img className="top-card__bg" src={ textImg8 } alt="the logo for the game connect four is shown, but it has been changed to say connect two. this is intended to be a double entendre, with the first meaning being that the author wants to help connect two people with this web page, the second meaning being that the user is looking to connect to people (as in connect to people)"/>
// <img className="top-card__bg" src={ textImg9 } alt="the logo for the game connect four is shown, but it has been changed to say connect two. this is intended to be a double entendre, with the first meaning being that the author wants to help connect two people with this web page, the second meaning being that the user is looking to connect to people (as in connect to people)"/>
// <img className="top-card__bg" src={ textImg10 } alt="the logo for the game connect four is shown, but it has been changed to say connect two. this is intended to be a double entendre, with the first meaning being that the author wants to help connect two people with this web page, the second meaning being that the user is looking to connect to people (as in connect to people)"/>
// <img className="top-card__bg" src={ textImg11 } alt="the logo for the game connect four is shown, but it has been changed to say connect two. this is intended to be a double entendre, with the first meaning being that the author wants to help connect two people with this web page, the second meaning being that the user is looking to connect to people (as in connect to people)"/>
// <img className="top-card__bg" src={ textImg12 } alt="the logo for the game connect four is shown, but it has been changed to say connect two. this is intended to be a double entendre, with the first meaning being that the author wants to help connect two people with this web page, the second meaning being that the user is looking to connect to people (as in connect to people)"/>
// <img className="top-card__bg" src={ textImg13 } alt="the logo for the game connect four is shown, but it has been changed to say connect two. this is intended to be a double entendre, with the first meaning being that the author wants to help connect two people with this web page, the second meaning being that the user is looking to connect to people (as in connect to people)"/>
// <img className="top-card__bg" src={ textImg14 } alt="the logo for the game connect four is shown, but it has been changed to say connect two. this is intended to be a double entendre, with the first meaning being that the author wants to help connect two people with this web page, the second meaning being that the user is looking to connect to people (as in connect to people)"/>
