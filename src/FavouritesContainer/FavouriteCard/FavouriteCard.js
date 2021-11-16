import React from 'react';

import bgi from '../fav-assets/background-four.png';

const FavouriteCard = ({ favourite, id, deleteFavourite }) => {

  return (
    <div className="favourites__saved-question">
      <p className="saved-question__question">{ favourite }</p>
      <img className="saved-question__deco" src={ bgi } alt="a splash of color across the card containing a favourited question" />
      <button
        className="saved-question__delete-question"
        onClick={ () => deleteFavourite(id) }
      >Remove from Favourites</button>
    </div>
  )
}

export default FavouriteCard;
