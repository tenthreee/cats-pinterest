import { createGlobalStyle } from "styled-components";
import FavImage from "../../assets/icon-favorite.svg";
import FavImageFull from "../../assets/icon-favorite-hover.svg";
import FavImageActive from "../../assets/icon-favorite-active.svg";

export const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap");

html {
  height: 100%;
}

body {
  margin: 0;
  display: grid;
  grid-template-rows: min-content 1fr;

  min-width: 320px;
  min-height: 100%;

  font-family: "Roboto", "Arial", sans-serif;
  font-size: 14px;
  line-height: 21px;
  color: #000000;
  background-color: #ffffff;
}

img {
  max-width: 100%;
  height: auto;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  clip: rect(0 0 0 0);
  overflow: hidden;
}

.page-header {
  color: rgba(255, 255, 255, 0.7);
  background-color: #2196F3;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.24);
}

.navigation {
  max-width: 1440px;
  margin: 0 auto;
  padding-left: 60px;
  padding-right: 60px;

  @media (max-width: 767px) {
    padding-left: 40px;
    padding-right: 40px;
  }
}

.navigation__list {
  display: flex;
  margin: 0;
  padding: 0;
  list-style-type: none;

  @media (max-width: 380px) {
    display: grid;
  }
}

.navigation__link {
  display: block;
  padding: 20px;
  color: inherit;
  text-decoration: none;
  transition: 0.3s;

  &:hover,
  &:focus {
    color: #ffffff;
    background-color: #1E88E5;
  }

  &--active {
    display: block;
    padding: 20px;
    color: #ffffff;
    background-color: #1E88E5;
    text-decoration: none;
  }
}

.cats {
  max-width: 1440px;
  margin: 0 auto;
  padding: 60px;

  @media (max-width: 767px) {
    padding: 40px;
  }
}

.cats__list {
  margin: 0;
  padding: 0;
  list-style-type: none;

  display: grid;
  grid-template-columns: repeat(auto-fit, 225px);
  gap: 40px;
}

.cats__message {
  margin: 0;
  margin-top: 50px;
  text-align: center;
}

.card {
  position: relative;
  width: 225px;
  height: 225px;
  transition: 0.3s;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 6px 5px rgba(0, 0, 0, 0.24), 0px 9px 18px rgba(0, 0, 0, 0.18);
  }

  &:hover .card__button,
  &:hover .card__button--active,
  &:hover .card__gradient {
    display: block;
  }
}

.card__image {
  max-width: 225px;
  max-height: 225px;
  height: 100%;
  object-fit: cover;
}

.card__gradient {
  position: absolute;
  bottom: 0;
  display: none;
  width: 100%;
  height: 100px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.9) 58.85%);
}

.card__button {
  position: absolute;
  bottom: 20px;
  right: 20px;

  padding: 0;
  width: 40px;
  height: 37px;
  display: none;

  border: none;
  background-color: transparent;
  background-image: url(${FavImage});
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    background-image: url(${FavImageFull});
  }

  &--active {
    position: absolute;
    bottom: 20px;
    right: 20px;

    padding: 0;
    width: 40px;
    height: 37px;
    display: none;

    border: none;
    background-color: transparent;
    background-image: url(${FavImageActive});
    transition: 0.3s;

    &:hover {
      cursor: pointer;
      background-image: url(${FavImageFull});
    }
  }
}
`;
