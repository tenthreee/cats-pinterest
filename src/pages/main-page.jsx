import React, { useState, useEffect, useContext } from "react";
import getCats from "../api/cats-api";
import CatsList from "../components/cats/cats";
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
