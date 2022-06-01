import React from "react";

function Cat({cat, toggleFavoriteCat, likedCats}) {
  return (
    <li className="card" key={cat.id}>
      <img className="card__image" src={cat.url} alt="Cute cat." width="225" height="225" />
      <div className="card__gradient"></div>

      {likedCats.indexOf(cat.id) === -1 ? (
        <button className="card__button" type="button" onClick={() => toggleFavoriteCat(cat)}>
          <span className="visually-hidden">Добавить в избранное</span>
        </button>
      ) : (
        <button className="card__button--active" type="button" onClick={() => toggleFavoriteCat(cat)}>
          <span className="visually-hidden">Добавить в избранное</span>
        </button>
      ) }
    </li>
  )
}

export default Cat;
