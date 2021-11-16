import React from 'react';
import FavouriteCard from './FavouriteCard/FavouriteCard';

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
      <h1 className="favourites__title">FAVOURITES</h1>
      <div className="favourites__container">
        { favourites }
      </div>
    </section>
  )
}

export default FavouritesContainer;
