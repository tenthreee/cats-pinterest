import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FavoriteCatsContext } from "../../context/context";
import { GlobalStyle } from "./styles";
import PageWrapper from "../page-wrapper/page-wrapper";
import MainPage from "../../pages/main-page";
import Favorites from "../../pages/favorites";

export default function App() {
  const [favoriteCats, setFavoriteCats] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('favoriteCats')) {
        setFavoriteCats(JSON.parse(localStorage.getItem('favoriteCats')))
    }
  }, [])

  function toggleFavoriteCat(cat) {
    let likedCats;

    if (favoriteCats.map(c => c.id).indexOf(cat.id) === -1) {
        likedCats = [...favoriteCats, cat];
    } else {
        likedCats = favoriteCats.filter(c => c.id !== cat.id)
    }

    setFavoriteCats(likedCats);
    localStorage.setItem('favoriteCats', JSON.stringify(likedCats))
  }

  return (
    <FavoriteCatsContext.Provider value={{favoriteCats, toggleFavoriteCat}}>
      <BrowserRouter>
        <GlobalStyle />
        <PageWrapper>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </PageWrapper>
      </BrowserRouter>
    </FavoriteCatsContext.Provider>
  );
}
