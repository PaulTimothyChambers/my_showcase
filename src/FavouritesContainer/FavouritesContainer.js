import React from 'react';
import FavouriteCard from './FavouriteCard/FavouriteCard';

import favouritesIcon from '../App/Nav/nav-assets/favourites-icon.png';

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

  return (
    <section className="favourites">
      <img className="favourite-center__icon-favourite-center" src={ favouritesIcon } alt="an icon of a star respresenting the favourites page" />
      <h1 className="favourites__title">FAVOURITES</h1>
      <div className="favourites__container">
        { favourites }
      </div>
    </section>
  )
}

export default FavouritesContainer;
