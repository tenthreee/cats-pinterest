import React, { useState, useEffect, useContext } from "react";
import getCats from "../api/cats-api";
import CatsList from "../components/cats/cats";
import { Message, StyledSection } from "../components/cats/styles";
import { FavoriteCatsContext } from "../context/context";

function MainPage() {
  const [cats, setCats] = useState();
  const {favoriteCats, toggleFavoriteCat} = useContext(FavoriteCatsContext);

  useEffect(() => {
    getCats().then((data) => {
      setCats(data)
    })
  }, [])

  return (
    <StyledSection>
      <CatsList
        cats={cats}
        likedCats = {favoriteCats.map(cat => cat.id)}
        toggleFavoriteCat={toggleFavoriteCat}
        />
      <Message>... загружаем ещё котиков ...</Message>
    </StyledSection>
  );
}

export default MainPage;
