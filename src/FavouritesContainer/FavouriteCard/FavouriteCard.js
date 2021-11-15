import React from 'react';

const FavouriteCard = ({ favourite, id, deleteFavourite }) => {

  return (
    <div className="favourites__saved-question">
      <p className="saved-question__question">{ favourite }</p>
      <button
        className="saved-question__delete-question"
        onClick={ () => deleteFavourite(id) }
      >
        Remove from Favourites
      </button>
    </div>
  )
}

export default FavouriteCard;
