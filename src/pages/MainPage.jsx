import React, { useState, useEffect, useContext } from "react";
import getCats from "../api/cats-api";
import CatsList from "../components/CatsList/CatsList";
import { FavoriteCatsContext } from "../context/FavoriteCatsContext";

function MainPage() {
  const [cats, setCats] = useState();
  const {favoriteCats, toggleFavoriteCat} = useContext(FavoriteCatsContext);

  useEffect(() => {
    getCats().then((data) => {
      setCats(data)
    })
  }, [])

  return (
    <section className="cats">
      <CatsList
        cats={cats}
        likedCats = {favoriteCats.map(cat => cat.id)}
        toggleFavoriteCat={toggleFavoriteCat}
      />
      <p className="cats__message">... загружаем ещё котиков ...</p>
    </section>
  );
}

export default MainPage;
