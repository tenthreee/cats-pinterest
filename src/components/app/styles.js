import { createGlobalStyle } from "styled-components";

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

.nav-link {
  display: block;
  padding: 20px;
  color: inherit;
  text-decoration: none;

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
`;
