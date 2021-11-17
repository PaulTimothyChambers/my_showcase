import React from 'react';
import FavouriteCard from './FavouriteCard/FavouriteCard';

import favouritesIcon from '../App/Nav/nav-assets/favourites-icon.png';
import arrow from './fav-assets/arrow.png';

const FavouritesContainer = ({ favouriteQuestions, deleteFavourite }) => {

  const favourites = favouriteQuestions.map(favourite => {
    return (
      <FavouriteCard
        key={ Date.now() + favourite.id }
        favourite={ favourite.question }
        id={ favourite.id }
        deleteFavourite={ deleteFavourite }
      />
    )
  })

  const arr = Array(9)
  const emptyFavs = arr.fill(
    <FavouriteCard
      key={ Date.now() + 1}
      favourite={ <img className="favourites__icon-favourites" src={ favouritesIcon } alt="an icon of a star respresenting the favourites page" /> }
      id="1"
    />
  )

  return (
    <>
      {
        !favouriteQuestions.length &&
          <>
            <section className="favourites">
              <img className="favourite-center__icon-favourite-center" src={ favouritesIcon } alt="an icon of a star respresenting the favourites page" />
              <h1 className="favourites__title">FAVOURITES</h1>
              <div className="no-favourites__container">
                { emptyFavs }
              </div>
            </section>
            <h2 className="no-favourites__missing">It looks like you haven't favourited any questions, yet. You can favourite questions you come across while taking quizzes in the Quiz Center (third tab down from the top). Once you've done so, any questions you have favourited will show up on this page!</h2>
            <img className="favourite-center__arrow" src={ arrow } alt="arrow bouncing back and forth, pointing to the quiz center tab on the top left, indicating that the user should navigate to the quiz center if they would like to begin favouriting questions" />
            <div className="overlay">
            </div>
          </>
      }
      {
        favouriteQuestions.length &&
          <section className="favourites">
            <img className="favourite-center__icon-favourite-center" src={ favouritesIcon } alt="an icon of a star respresenting the favourites page" />
            <h1 className="favourites__title">FAVOURITES</h1>
            <div className="favourites__container">
              { favourites }
            </div>
          </section>
      }
    </>
  )
}

export default FavouritesContainer;
