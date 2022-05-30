import React from "react";
import PageWrapper from "../page-wrapper/page-wrapper";
import { GlobalStyle } from "./styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "../../pages/main-page";
import Favorites from "../../pages/favorites";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <PageWrapper>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </PageWrapper>
    </BrowserRouter>
  );
}
