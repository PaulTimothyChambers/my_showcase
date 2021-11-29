import React from 'react';

import bg1 from '../FavouritesContainer/fav-assets/background-four.6159a7b8.png';

const FavouriteCard = ({ favourite, id, deleteFavourite, favouritesIcon }) => {

  return (
    <div className="favourites__saved-question">
      {
        !favourite &&
          <img className="favourites__icon-favourites" src={ favouritesIcon } alt="an icon of a star respresenting the favourites page" />
      }
      {
        favourite &&
          <>
            <p className="saved-question__question">{ favourite }</p>
            <button
              className="saved-question__delete-question"
              onClick={ () => deleteFavourite(id) }
            >
            Remove from Favourites</button>
          </>
      }
      <img className="saved-question__deco" src={ bg1 } alt='a splash of color across each "card" with a favourited question on it' />
    </div>
  )
}

export default FavouriteCard;
