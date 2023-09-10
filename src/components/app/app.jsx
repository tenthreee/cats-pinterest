import React, { useEffect, useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { FavoriteCatsContext } from "../../context/FavoriteCatsContext";
import PageWrapper from "../PageWrapper/PageWrapper";
import MainPage from "../../pages/MainPage";
import Favorites from "../../pages/Favorites";
import PageNotFound from "../../pages/PageNotFound";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import './App.scss';

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
      <HashRouter>
        <ScrollToTop />
        <PageWrapper>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </PageWrapper>
      </HashRouter>
    </FavoriteCatsContext.Provider>
  );
}
