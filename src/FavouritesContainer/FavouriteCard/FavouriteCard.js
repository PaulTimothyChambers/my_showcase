import React from 'react';

import bg1 from '../fav-assets/background-four.6159a7b8.png';

const FavouriteCard = ({ favourite, id, deleteFavourite }) => {

  return (
    <div className="favourites__saved-question">
      <p className="saved-question__question">{ favourite }</p>
      <img className="saved-question__deco" src={ bg1 } alt="a splash of color across the card containing a favourited question" />
      <button
        className="saved-question__delete-question"
        onClick={ () => deleteFavourite(id) }
      >Remove from Favourites</button>
    </div>
  )
}

export default FavouriteCard;
