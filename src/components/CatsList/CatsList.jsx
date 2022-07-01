import React from "react";
import Cat from "../Cat/Cat";
import './CatsList.scss';

function CatsList({cats, toggleFavoriteCat, likedCats}) {
  return (
    <>
      {cats && cats.length ? (
        <ul className="cats__list">
          {cats.map((cat) => (
            <Cat
              key={cat.id}
              cat={cat}
              toggleFavoriteCat={toggleFavoriteCat}
              likedCats={likedCats}
            />
          ))}
        </ul>
      ) : null}
    </>
  )
}

export default CatsList;
