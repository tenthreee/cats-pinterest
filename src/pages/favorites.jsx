import React, { useContext } from "react";
import CatsList from "../components/cats/cats";
import { StyledSection } from "../components/cats/styles";
import { FavoriteCatsContext } from "../context/context";

function Favorites() {
  const {favoriteCats, toggleFavoriteCat} = useContext(FavoriteCatsContext);

  return (
    <StyledSection>
      <CatsList
        cats={favoriteCats}
        likedCats = {favoriteCats.map(cat => cat.id)}
        toggleFavoriteCat={toggleFavoriteCat}
      />
    </StyledSection>
  );
}

export default Favorites;
