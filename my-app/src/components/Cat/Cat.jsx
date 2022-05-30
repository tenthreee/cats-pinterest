import React from "react";
import { CatCard, CatImage, StyledButton } from "./styles";

function Cat({ cat }) {
  return (
    <CatCard key={cat.id}>
      <CatImage src={cat.url} alt="Cute kitten." width="225" height="225" />
      <StyledButton type="button">
        <span className="visually-hidden">Добавить в избранное</span>
      </StyledButton>
    </CatCard>
  )
}

export default Cat;
