import React from "react";
import { CatCard, CatImage, StyledButton, StyledButtonActive } from "./styles";

function Cat({cat, toggleFavoriteCat, likedCats}) {
  return (
    <CatCard key={cat.id}>
      <CatImage src={cat.url} alt="Cute cat." width="225" height="225" />

      {likedCats.indexOf(cat.id) === -1 ? (
        <StyledButton type="button" onClick={() => toggleFavoriteCat(cat)}>
          <span className="visually-hidden">Добавить в избранное</span>
        </StyledButton>
      ) : (
        <StyledButtonActive type="button" onClick={() => toggleFavoriteCat(cat)}>
          <span className="visually-hidden">Добавить в избранное</span>
        </StyledButtonActive>
      ) }
    </CatCard>
  )
}

export default Cat;
