import React from "react";
import { StyledList } from "./styles";
import Cat from "../cat/cat";

function CatsList({cats, toggleFavoriteCat, likedCats}) {
  return (
    <>
      {cats && cats.length ? (
        <StyledList>
          {cats.map((cat) => (
            <Cat
              key={cat.id}
              cat={cat}
              toggleFavoriteCat={toggleFavoriteCat}
              likedCats={likedCats}
            />
          ))}
        </StyledList>
      ) : null}
    </>
  )
}

export default CatsList;
