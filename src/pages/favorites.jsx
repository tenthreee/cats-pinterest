import React, { useContext } from "react";
import CatsList from "../components/CatsList/CatsList";
import { FavoriteCatsContext } from "../context/context";

function Favorites() {
  const {favoriteCats, toggleFavoriteCat} = useContext(FavoriteCatsContext);

  return (
    <section className="cats">
      <CatsList
        cats={favoriteCats}
        likedCats = {favoriteCats.map(cat => cat.id)}
        toggleFavoriteCat={toggleFavoriteCat}
      />
    </section>
  );
}

export default Favorites;
